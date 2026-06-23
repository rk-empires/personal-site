import { test, expect, Page, request as pwRequest } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Portfolio QA suite.
 *
 * Configure the target with PORTFOLIO_URL, otherwise the hardcoded default below is used.
 * Selectors are intentionally resilient (role / text / common patterns) because the
 * site markup isn't known here — adjust the SELECTORS block if your DOM differs.
 */
const PORTFOLIO_URL = process.env.PORTFOLIO_URL;
if (!PORTFOLIO_URL) {
  throw new Error('PORTFOLIO_URL env var is required, e.g. $env:PORTFOLIO_URL="https://your-portfolio.com"');
}

const SELECTORS = {
  // Profile photo: an <img> whose alt mentions the name, or with a profile-ish class/id.
  profilePhoto: 'img[alt*="profile" i], img[alt*="photo" i], img.profile, #profile-photo, header img, .hero img',
  // Download resume button/link.
  downloadResume: 'a:has-text("Download Resume"), a:has-text("Resume"), button:has-text("Resume"), a[href$=".pdf"]',
  // "View live" links inside the Work/Projects section.
  viewLive: 'a:has-text("View live"), a:has-text("View Live"), a:has-text("Live")',
  // Social links (common networks).
  socialLinks:
    'a[href*="github.com"], a[href*="linkedin.com"], a[href*="twitter.com"], a[href*="x.com"], a[href*="instagram.com"], a[href*="youtube.com"], a[href*="dribbble.com"], a[href*="behance.net"]',
};

const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');
const REPORT_PATH = path.join(__dirname, 'qa-report.md');

type Result = { name: string; pass: boolean; details: string };
const results: Result[] = [];
const screenshots: { label: string; file: string }[] = [];

function record(name: string, pass: boolean, details = '') {
  results.push({ name, pass, details });
}

test('Portfolio QA', async ({ page, browser }) => {
  test.setTimeout(180_000);
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  // ---- 1. Open the site --------------------------------------------------
  let loaded = false;
  try {
    const resp = await page.goto(PORTFOLIO_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
    loaded = !!resp && resp.status() < 400;
    record('1. Page loads', loaded, `${PORTFOLIO_URL} → status ${resp?.status() ?? 'no response'}`);
  } catch (e) {
    record('1. Page loads', false, `Navigation failed: ${(e as Error).message}`);
  }

  // ---- 2. Title + meta description --------------------------------------
  try {
    const title = await page.title();
    const titleOk = title.trim().length > 0;
    record('2a. Page title set', titleOk, `title: "${title}"`);

    const desc = await page
      .locator('head meta[name="description"]')
      .getAttribute('content')
      .catch(() => null);
    const descOk = !!desc && desc.trim().length > 0;
    record('2b. Meta description set', descOk, desc ? `description: "${desc}"` : 'no meta description found');
  } catch (e) {
    record('2. Title/meta', false, (e as Error).message);
  }

  // ---- 3. Profile photo loads -------------------------------------------
  try {
    const img = page.locator(SELECTORS.profilePhoto).first();
    await img.waitFor({ state: 'visible', timeout: 10_000 });
    const naturalWidth = await img.evaluate(
      (el) => (el as HTMLImageElement).naturalWidth || 0
    );
    const ok = naturalWidth > 0;
    const src = await img.getAttribute('src');
    record('3. Profile photo loads', ok, `naturalWidth=${naturalWidth}, src=${src}`);
  } catch (e) {
    record('3. Profile photo loads', false, `Photo not found/loaded: ${(e as Error).message}`);
  }

  // ---- 4. Download Resume opens/downloads a PDF -------------------------
  try {
    // Prefer the explicit "Download Resume" control; fall back to the broader selector.
    const explicit = page.getByRole('link', { name: /download resume/i }).or(
      page.getByRole('button', { name: /download resume/i })
    );
    const btn = (await explicit.count()) > 0 ? explicit.first() : page.locator(SELECTORS.downloadResume).first();
    await btn.waitFor({ state: 'visible', timeout: 10_000 });
    await btn.scrollIntoViewIfNeeded().catch(() => {});
    const href = await btn.getAttribute('href');

    // Try as a download first; fall back to popup; fall back to href check.
    let pdfVerified = false;
    let detail = '';

    if (href && /\.pdf(\?|#|$)/i.test(href)) {
      // Resolve absolute URL and HEAD/GET it.
      const abs = new URL(href, page.url()).toString();
      const ctx = await pwRequest.newContext();
      const r = await ctx.get(abs);
      const ct = r.headers()['content-type'] || '';
      pdfVerified = r.ok() && /pdf/i.test(ct);
      detail = `href=${abs} → status ${r.status()}, content-type "${ct}"`;
      await ctx.dispose();
    } else {
      // Click and watch for either a download or a new tab.
      const [download] = await Promise.all([
        page.waitForEvent('download', { timeout: 15_000 }).catch(() => null),
        btn.click({ timeout: 8_000 }).catch(() => null),
      ]);
      if (download) {
        const fn = download.suggestedFilename();
        pdfVerified = /\.pdf$/i.test(fn);
        detail = `download started: ${fn}`;
      } else {
        const pages = browser.contexts()[0].pages();
        const opened = pages.find((p) => p !== page && /\.pdf/i.test(p.url()));
        pdfVerified = !!opened;
        detail = opened ? `opened PDF tab: ${opened.url()}` : 'no download or PDF tab detected';
      }
    }
    record('4. Download Resume → PDF', pdfVerified, detail);
  } catch (e) {
    record('4. Download Resume → PDF', false, (e as Error).message);
  }

  // ---- 5. Every "View live" link returns 200 ----------------------------
  try {
    const links = page.locator(SELECTORS.viewLive);
    const count = await links.count();
    if (count === 0) {
      record('5. "View live" links return 200', false, 'No "View live" links found');
    } else {
      const ctx = await pwRequest.newContext();
      const broken: string[] = [];
      for (let i = 0; i < count; i++) {
        const href = await links.nth(i).getAttribute('href');
        if (!href) {
          broken.push(`(link ${i}: no href)`);
          continue;
        }
        const abs = new URL(href, page.url()).toString();
        try {
          const r = await ctx.get(abs, { timeout: 8_000 });
          if (r.status() !== 200) broken.push(`${abs} → ${r.status()}`);
        } catch (err) {
          broken.push(`${abs} → error ${(err as Error).message}`);
        }
      }
      await ctx.dispose();
      record(
        '5. "View live" links return 200',
        broken.length === 0,
        broken.length === 0 ? `${count} link(s) all 200` : `Broken: ${broken.join('; ')}`
      );
    }
  } catch (e) {
    record('5. "View live" links return 200', false, (e as Error).message);
  }

  // ---- 6. CAPSTONE RULE: zero contact details ---------------------------
  // The portfolio must expose NO email, phone, mailto, or social handle/link
  // anywhere on the page. This check PASSES when none are found.
  try {
    const offenders: string[] = [];

    // Any mailto: or tel: links.
    const mailtoCount = await page.locator('a[href^="mailto:"]').count();
    const telCount = await page.locator('a[href^="tel:"]').count();
    if (mailtoCount > 0) offenders.push(`${mailtoCount} mailto: link(s)`);
    if (telCount > 0) offenders.push(`${telCount} tel: link(s)`);

    // Any links to known social networks.
    const socialCount = await page.locator(SELECTORS.socialLinks).count();
    if (socialCount > 0) offenders.push(`${socialCount} social link(s)`);

    // Visible email addresses in the rendered text.
    const bodyText = await page.locator('body').innerText();
    const emails = bodyText.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) || [];
    if (emails.length) offenders.push(`visible email(s): ${[...new Set(emails)].join(', ')}`);

    // Social handle hostnames mentioned in text (handles without links).
    const handleHosts = bodyText.match(
      /\b(?:linkedin\.com|github\.com|twitter\.com|x\.com|instagram\.com|facebook\.com|threads\.net|bsky\.app|mastodon|t\.me|tiktok\.com)\S*/gi
    );
    if (handleHosts?.length) offenders.push(`social handles in text: ${[...new Set(handleHosts)].join(', ')}`);

    record(
      '6. Zero contact details (capstone)',
      offenders.length === 0,
      offenders.length === 0 ? 'No email/phone/social/mailto found — compliant' : `Found: ${offenders.join('; ')}`
    );
  } catch (e) {
    record('6. Zero contact details (capstone)', false, (e as Error).message);
  }

  // ---- 7. CAPSTONE RULE: Arca attribution in footer ---------------------
  // Footer must show "Made for Arca" + Arca logo, be the last element, and
  // link to https://arca.ph in a new tab.
  try {
    const bodyText = await page.locator('body').innerText();
    const hasText = /made for arca/i.test(bodyText);

    const arcaLink = page.locator('a[href*="arca.ph"]').first();
    const linkCount = await arcaLink.count();
    const href = linkCount ? await arcaLink.getAttribute('href') : null;
    const target = linkCount ? await arcaLink.getAttribute('target') : null;
    const hasLogo = (await page.locator('img[src*="arca" i], a[href*="arca.ph"] img').count()) > 0;

    const okHref = !!href && /^https?:\/\/(www\.)?arca\.ph/i.test(href);
    const okTarget = target === '_blank';
    const ok = hasText && okHref && okTarget && hasLogo;

    const parts = [
      `"Made for Arca" text: ${hasText ? 'yes' : 'NO'}`,
      `arca.ph link: ${href ?? 'NONE'}`,
      `opens new tab: ${okTarget ? 'yes' : 'NO'}`,
      `logo: ${hasLogo ? 'yes' : 'NO'}`,
    ];
    record('7. Arca footer attribution (capstone)', ok, parts.join('; '));
  } catch (e) {
    record('7. Arca footer attribution (capstone)', false, (e as Error).message);
  }

  // ---- 8. Screenshots at three viewports --------------------------------
  const viewports = [
    { label: 'Desktop (1440x900)', file: 'desktop-1440x900.png', width: 1440, height: 900 },
    { label: 'Tablet (768x1024)', file: 'tablet-768x1024.png', width: 768, height: 1024 },
    { label: 'Mobile (375x667)', file: 'mobile-375x667.png', width: 375, height: 667 },
  ];
  for (const vp of viewports) {
    try {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.waitForTimeout(400); // allow responsive reflow
      const file = path.join(SCREENSHOT_DIR, vp.file);
      let mode = 'fullPage';
      try {
        await page.screenshot({ path: file, fullPage: true, animations: 'disabled', timeout: 20_000 });
      } catch {
        // WebKit can hang on fullPage capture of tall/animated pages — fall back to viewport.
        mode = 'viewport (fullPage timed out)';
        await page.screenshot({ path: file, animations: 'disabled', timeout: 15_000 });
      }
      screenshots.push({ label: vp.label, file: path.relative(__dirname, file) });
      record(`8. Screenshot — ${vp.label}`, true, `${path.relative(__dirname, file)} [${mode}]`);
    } catch (e) {
      record(`8. Screenshot — ${vp.label}`, false, (e as Error).message);
    }
  }

  // ---- 9. No horizontal scroll on mobile --------------------------------
  try {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(400);
    const { scrollW, clientW } = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));
    const ok = scrollW <= clientW + 1; // 1px tolerance
    record('9. No horizontal scroll (mobile)', ok, `scrollWidth=${scrollW}, clientWidth=${clientW}`);
  } catch (e) {
    record('9. No horizontal scroll (mobile)', false, (e as Error).message);
  }

  // ---- Write markdown report --------------------------------------------
  writeReport();

  // Fail the test run if any check failed (report is already written).
  const failed = results.filter((r) => !r.pass);
  expect(failed, `Failed checks:\n${failed.map((f) => `- ${f.name}: ${f.details}`).join('\n')}`).toHaveLength(0);
});

function writeReport() {
  const total = results.length;
  const passed = results.filter((r) => r.pass).length;
  const stamp = new Date().toISOString();

  const lines: string[] = [];
  lines.push('# Portfolio QA Report');
  lines.push('');
  lines.push(`- **Target:** ${PORTFOLIO_URL}`);
  lines.push(`- **Generated:** ${stamp}`);
  lines.push(`- **Result:** ${passed}/${total} checks passed`);
  lines.push('');
  lines.push('## Checks');
  lines.push('');
  lines.push('| Check | Result | Details |');
  lines.push('| --- | --- | --- |');
  for (const r of results) {
    const cell = (r.details || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    lines.push(`| ${r.name} | ${r.pass ? '✅ PASS' : '❌ FAIL'} | ${cell} |`);
  }
  lines.push('');
  lines.push('## Screenshots');
  lines.push('');
  if (screenshots.length === 0) {
    lines.push('_No screenshots captured._');
  } else {
    for (const s of screenshots) {
      lines.push(`### ${s.label}`);
      lines.push('');
      lines.push(`![${s.label}](${s.file.split(path.sep).join('/')})`);
      lines.push('');
    }
  }

  fs.writeFileSync(REPORT_PATH, lines.join('\n'), 'utf8');
}
