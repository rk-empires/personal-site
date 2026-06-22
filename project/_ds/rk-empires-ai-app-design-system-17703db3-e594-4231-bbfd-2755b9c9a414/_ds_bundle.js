/* @ds-bundle: {"format":3,"namespace":"RKEmpiresDesignSystem_17703d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"HeartIndicator","sourcePath":"components/gamification/HeartIndicator.jsx"},{"name":"LevelBadge","sourcePath":"components/gamification/LevelBadge.jsx"},{"name":"StreakBadge","sourcePath":"components/gamification/StreakBadge.jsx"},{"name":"XPBar","sourcePath":"components/gamification/XPBar.jsx"},{"name":"AnswerCard","sourcePath":"components/learning/AnswerCard.jsx"},{"name":"PathNode","sourcePath":"components/learning/PathNode.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e86e1ce11bf4","components/core/Button.jsx":"fee4caf2c342","components/core/Card.jsx":"8f263e25f7f5","components/core/Input.jsx":"ac0b1e89890b","components/gamification/HeartIndicator.jsx":"f0cf25dad78d","components/gamification/LevelBadge.jsx":"b3435f2a6c2f","components/gamification/StreakBadge.jsx":"100249a81526","components/gamification/XPBar.jsx":"eff0049c5ad6","components/learning/AnswerCard.jsx":"50cc484d9a73","components/learning/PathNode.jsx":"35d718052be7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RKEmpiresDesignSystem_17703d = window.RKEmpiresDesignSystem_17703d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * RK Empires — Badge
 * Compact label for status, categories, levels, and counts.
 */
function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  style: extraStyle = {}
}) {
  const sizes = {
    xs: {
      fontSize: '10px',
      padding: '2px 8px',
      gap: '4px'
    },
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '3px 10px',
      gap: '4px'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '4px 12px',
      gap: '5px'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '6px 16px',
      gap: '6px'
    }
  };
  const variants = {
    default: {
      background: 'rgba(255,255,255,0.08)',
      color: 'var(--text-secondary)',
      border: '1px solid rgba(255,255,255,0.12)'
    },
    gold: {
      background: 'rgba(212,175,55,0.15)',
      color: 'var(--color-gold-400)',
      border: '1px solid rgba(212,175,55,0.35)'
    },
    'gold-solid': {
      background: 'var(--gradient-gold)',
      color: '#0D0D0D',
      border: 'none'
    },
    success: {
      background: 'var(--color-success-dim)',
      color: 'var(--color-success)',
      border: '1px solid rgba(34,197,94,0.3)'
    },
    error: {
      background: 'var(--color-error-dim)',
      color: 'var(--color-error)',
      border: '1px solid rgba(239,68,68,0.3)'
    },
    warning: {
      background: 'var(--color-warning-dim)',
      color: 'var(--color-warning)',
      border: '1px solid rgba(245,158,11,0.3)'
    },
    info: {
      background: 'var(--color-info-dim)',
      color: 'var(--color-info)',
      border: '1px solid rgba(59,130,246,0.3)'
    },
    // Level badges
    rookie: {
      background: 'rgba(139,115,85,0.2)',
      color: '#C4A77D',
      border: '1px solid rgba(139,115,85,0.4)'
    },
    beginner: {
      background: 'rgba(192,192,192,0.12)',
      color: '#C0C0C0',
      border: '1px solid rgba(192,192,192,0.35)'
    },
    intermediate: {
      background: 'rgba(212,175,55,0.15)',
      color: '#D4AF37',
      border: '1px solid rgba(212,175,55,0.35)'
    },
    advanced: {
      background: 'rgba(0,206,209,0.12)',
      color: '#00CED1',
      border: '1px solid rgba(0,206,209,0.35)'
    },
    expert: {
      background: 'rgba(155,89,182,0.15)',
      color: '#B07DD4',
      border: '1px solid rgba(155,89,182,0.35)'
    },
    master: {
      background: 'rgba(231,76,60,0.15)',
      color: '#E88070',
      border: '1px solid rgba(231,76,60,0.35)'
    }
  };
  const s = sizes[size];
  const v = variants[variant] || variants.default;
  const dotColors = {
    success: 'var(--color-success)',
    error: 'var(--color-error)',
    warning: 'var(--color-warning)',
    info: 'var(--color-info)',
    gold: 'var(--color-gold-400)',
    default: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...v,
      ...extraStyle
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: dotColors[variant] || dotColors.default,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * RK Empires — Button
 * Primary CTA and action buttons across the AI learning app.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style: extraStyle = {}
}) {
  const [pressed, setPressed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.04em',
    textDecoration: 'none',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-full)',
    transition: 'background var(--dur-fast) var(--ease-inout), box-shadow var(--dur-normal) var(--ease-inout), transform var(--dur-fast) var(--ease-spring), opacity var(--dur-fast) var(--ease-inout)',
    width: fullWidth ? '100%' : undefined,
    outline: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)'
  };
  const sizes = {
    xs: {
      fontSize: 'var(--text-xs)',
      padding: '6px 14px',
      minHeight: '32px'
    },
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '8px 18px',
      minHeight: '36px'
    },
    md: {
      fontSize: 'var(--text-md)',
      padding: '12px 24px',
      minHeight: '44px'
    },
    lg: {
      fontSize: 'var(--text-lg)',
      padding: '14px 32px',
      minHeight: '52px'
    },
    xl: {
      fontSize: 'var(--text-xl)',
      padding: '16px 40px',
      minHeight: '60px'
    }
  };
  const variants = {
    primary: {
      background: hovered && !disabled ? 'linear-gradient(135deg, #F0D060 0%, #D4AF37 40%, #C09B2A 100%)' : 'linear-gradient(135deg, #ECC84A 0%, #D4AF37 40%, #B8860B 100%)',
      color: '#0D0D0D',
      boxShadow: pressed ? 'var(--shadow-button-press)' : 'var(--shadow-button), var(--glow-gold-xs)',
      opacity: disabled ? 0.4 : 1
    },
    secondary: {
      background: hovered && !disabled ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.08)',
      color: disabled ? 'var(--text-muted)' : 'var(--color-gold-400)',
      border: '1px solid rgba(212,175,55,0.4)',
      boxShadow: pressed ? 'none' : 'var(--shadow-xs)',
      opacity: disabled ? 0.4 : 1
    },
    ghost: {
      background: hovered && !disabled ? 'rgba(255,255,255,0.07)' : 'transparent',
      color: disabled ? 'var(--text-muted)' : 'var(--text-secondary)',
      opacity: disabled ? 0.4 : 1
    },
    danger: {
      background: hovered && !disabled ? '#DC2626' : 'var(--color-error)',
      color: '#FFFFFF',
      boxShadow: pressed ? 'none' : 'var(--shadow-button)',
      opacity: disabled ? 0.4 : 1
    },
    success: {
      background: hovered && !disabled ? '#16A34A' : 'var(--color-success)',
      color: '#FFFFFF',
      boxShadow: pressed ? 'none' : 'var(--shadow-button)',
      opacity: disabled ? 0.4 : 1
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...extraStyle
    }
  }, loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '16px',
      height: '16px',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'rk-spin 0.7s linear infinite',
      flexShrink: 0
    }
  }) : iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * RK Empires — Card
 * Dark-surface content container. Variants: default, gold, lesson, achievement.
 */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'xl',
  hoverable = false,
  onClick,
  style: extraStyle = {}
}) {
  const [hovered, setHovered] = React.useState(false);
  const paddings = {
    none: '0',
    sm: 'var(--space-3)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)',
    xl: 'var(--space-8)'
  };
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    '3xl': 'var(--radius-3xl)'
  };
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      boxShadow: hovered && hoverable ? 'var(--shadow-card-hover)' : 'var(--shadow-card)'
    },
    gold: {
      background: 'var(--surface-card)',
      border: 'var(--border-card-gold)',
      boxShadow: hovered && hoverable ? '0 8px 40px rgba(0,0,0,0.6), var(--glow-gold-md)' : 'var(--shadow-card-gold)'
    },
    lesson: {
      background: 'linear-gradient(145deg, #202020 0%, #1A1A1A 100%)',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: hovered && hoverable ? 'var(--shadow-card-hover)' : 'var(--shadow-card)'
    },
    achievement: {
      background: 'linear-gradient(135deg, #1E1800 0%, #1A1A1A 50%, #1E1800 100%)',
      border: '1px solid rgba(212,175,55,0.5)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.2)'
    },
    glass: {
      background: 'rgba(26,26,26,0.7)',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: 'var(--shadow-lg)',
      backdropFilter: 'var(--blur-md)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => hoverable && setHovered(true),
    onMouseLeave: () => hoverable && setHovered(false),
    style: {
      padding: paddings[padding],
      borderRadius: radii[radius],
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-normal) var(--ease-inout), transform var(--dur-fast) var(--ease-spring)',
      transform: hovered && hoverable ? 'translateY(-2px)' : 'translateY(0)',
      position: 'relative',
      overflow: 'hidden',
      ...variants[variant],
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'var(--gradient-card-shine)',
      borderRadius: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * RK Empires — Input
 * Text input field with gold focus ring and optional icons.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  hint,
  iconLeft = null,
  iconRight = null,
  size = 'md',
  style: extraStyle = {}
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      height: '36px',
      px: '12px'
    },
    md: {
      fontSize: 'var(--text-md)',
      height: '48px',
      px: '16px'
    },
    lg: {
      fontSize: 'var(--text-lg)',
      height: '56px',
      px: '20px'
    }
  };
  const s = sizes[size];
  const hasError = Boolean(error);
  const borderColor = hasError ? 'var(--color-error)' : focused ? 'var(--color-gold-400)' : 'rgba(255,255,255,0.12)';
  const boxShadow = focused && !hasError ? '0 0 0 3px rgba(212,175,55,0.2)' : focused && hasError ? '0 0 0 3px rgba(239,68,68,0.2)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...extraStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: hasError ? 'var(--color-error)' : 'var(--text-secondary)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: s.px,
      color: focused ? 'var(--color-gold-400)' : 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      transition: 'color var(--dur-fast) var(--ease-inout)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: s.height,
      paddingLeft: iconLeft ? `calc(${s.px} + 28px)` : s.px,
      paddingRight: iconRight ? `calc(${s.px} + 28px)` : s.px,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-regular)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      background: disabled ? 'rgba(255,255,255,0.03)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow,
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-inout), box-shadow var(--dur-fast) var(--ease-inout)',
      cursor: disabled ? 'not-allowed' : 'text',
      boxSizing: 'border-box'
    }
  }), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: s.px,
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none'
    }
  }, iconRight)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      color: hasError ? 'var(--color-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/gamification/HeartIndicator.jsx
try { (() => {
/**
 * RK Empires — HeartIndicator
 * Focus Points (❤) display — shows remaining hearts with empty slots.
 */
function HeartIndicator({
  current = 5,
  max = 5,
  size = 'md',
  style: extraStyle = {}
}) {
  const sizes = {
    sm: 16,
    md: 22,
    lg: 28
  };
  const px = sizes[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      ...extraStyle
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: px,
    height: px,
    viewBox: "0 0 24 24",
    fill: i < current ? '#EF4444' : 'none',
    stroke: i < current ? '#EF4444' : 'rgba(255,255,255,0.2)',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: i < current ? 'drop-shadow(0 0 4px rgba(239,68,68,0.6))' : 'none',
      transition: 'all 0.3s var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }))));
}
Object.assign(__ds_scope, { HeartIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gamification/HeartIndicator.jsx", error: String((e && e.message) || e) }); }

// components/gamification/LevelBadge.jsx
try { (() => {
/**
 * RK Empires — LevelBadge
 * Crown + level name display. Used on profile, assessment result, leaderboard.
 */
function LevelBadge({
  level = 'rookie',
  showCrown = true,
  size = 'md',
  style: extraStyle = {}
}) {
  const levels = {
    rookie: {
      label: 'Rookie',
      color: '#C4A77D',
      bg: 'rgba(139,115,85,0.15)',
      border: 'rgba(139,115,85,0.4)'
    },
    beginner: {
      label: 'Beginner',
      color: '#C0C0C0',
      bg: 'rgba(192,192,192,0.1)',
      border: 'rgba(192,192,192,0.3)'
    },
    intermediate: {
      label: 'Intermediate',
      color: '#D4AF37',
      bg: 'rgba(212,175,55,0.12)',
      border: 'rgba(212,175,55,0.4)'
    },
    advanced: {
      label: 'Advanced',
      color: '#00CED1',
      bg: 'rgba(0,206,209,0.1)',
      border: 'rgba(0,206,209,0.35)'
    },
    expert: {
      label: 'Expert',
      color: '#B07DD4',
      bg: 'rgba(155,89,182,0.12)',
      border: 'rgba(155,89,182,0.35)'
    },
    master: {
      label: 'Master',
      color: '#E88070',
      bg: 'rgba(231,76,60,0.12)',
      border: 'rgba(231,76,60,0.35)'
    }
  };
  const sizes = {
    sm: {
      font: 'var(--text-xs)',
      crown: 12,
      pad: '4px 10px',
      gap: '5px'
    },
    md: {
      font: 'var(--text-sm)',
      crown: 16,
      pad: '6px 14px',
      gap: '6px'
    },
    lg: {
      font: 'var(--text-md)',
      crown: 20,
      pad: '8px 18px',
      gap: '8px'
    },
    xl: {
      font: 'var(--text-xl)',
      crown: 28,
      pad: '10px 24px',
      gap: '10px'
    }
  };
  const lv = levels[level] || levels.rookie;
  const s = sizes[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.pad,
      background: lv.bg,
      border: `1px solid ${lv.border}`,
      borderRadius: 'var(--radius-full)',
      ...extraStyle
    }
  }, showCrown && /*#__PURE__*/React.createElement("svg", {
    width: s.crown,
    height: s.crown,
    viewBox: "0 0 24 24",
    fill: lv.color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 19h20v2H2v-2zm18-9l-4 4-4-8-4 8-4-4-2 9h20l-2-9z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: s.font,
      fontWeight: 'var(--fw-bold)',
      color: lv.color,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, lv.label));
}
Object.assign(__ds_scope, { LevelBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gamification/LevelBadge.jsx", error: String((e && e.message) || e) }); }

// components/gamification/StreakBadge.jsx
try { (() => {
/**
 * RK Empires — StreakBadge
 * Animated flame counter for consecutive learning days.
 */
function StreakBadge({
  count = 0,
  size = 'md',
  style: extraStyle = {}
}) {
  const sizes = {
    sm: {
      flame: 16,
      font: 'var(--text-sm)',
      pad: '4px 10px',
      gap: '4px'
    },
    md: {
      flame: 22,
      font: 'var(--text-lg)',
      pad: '6px 14px',
      gap: '6px'
    },
    lg: {
      flame: 30,
      font: 'var(--text-2xl)',
      pad: '8px 18px',
      gap: '8px'
    }
  };
  const s = sizes[size];
  const active = count > 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.pad,
      background: active ? 'rgba(239,68,68,0.12)' : 'rgba(255,255,255,0.06)',
      border: active ? '1px solid rgba(239,68,68,0.3)' : '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-full)',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: s.flame,
    height: s.flame,
    viewBox: "0 0 24 24",
    fill: active ? '#FF6B35' : '#555',
    style: {
      filter: active ? 'drop-shadow(0 0 6px rgba(255,107,53,0.8))' : 'none',
      animation: active ? 'rk-streak-fire 1.2s ease-in-out infinite' : 'none',
      transformOrigin: 'bottom center'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2c0 0-6 5.5-6 10a6 6 0 0012 0C18 7.5 12 2 12 2zm0 14a4 4 0 01-4-4c0-2.5 2.5-5.5 4-7 1.5 1.5 4 4.5 4 7a4 4 0 01-4 4z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: s.font,
      fontWeight: 'var(--fw-bold)',
      color: active ? '#FF8C5A' : 'var(--text-muted)',
      lineHeight: 1
    }
  }, count));
}
Object.assign(__ds_scope, { StreakBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gamification/StreakBadge.jsx", error: String((e && e.message) || e) }); }

// components/gamification/XPBar.jsx
try { (() => {
/**
 * RK Empires — XPBar
 * Intelligence Points progress bar with animated fill and label.
 */
function XPBar({
  current = 0,
  max = 100,
  label = 'Intelligence Points',
  showValues = true,
  size = 'md',
  animated = true,
  style: extraStyle = {}
}) {
  const pct = Math.min(100, Math.max(0, current / max * 100));
  const heights = {
    sm: '6px',
    md: '10px',
    lg: '14px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...extraStyle
    }
  }, (label || showValues) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-muted)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, label), showValues && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-gold-400)'
    }
  }, current.toLocaleString(), " / ", max.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: heights[size],
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 'var(--radius-full)',
      background: 'linear-gradient(90deg, #B8860B 0%, #D4AF37 50%, #ECC84A 100%)',
      boxShadow: '0 0 8px rgba(212,175,55,0.5)',
      transition: animated ? 'width 0.6s var(--ease-smooth)' : 'none',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
      backgroundSize: '200% 100%',
      animation: animated ? 'rk-shimmer 2s linear infinite' : 'none'
    }
  }))));
}
Object.assign(__ds_scope, { XPBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gamification/XPBar.jsx", error: String((e && e.message) || e) }); }

// components/learning/AnswerCard.jsx
try { (() => {
/**
 * RK Empires — AnswerCard
 * Multiple-choice answer option for lesson screens.
 * States: idle, selected, correct, incorrect, disabled.
 */
function AnswerCard({
  children,
  label,
  state = 'idle',
  onClick,
  style: extraStyle = {}
}) {
  const [hovered, setHovered] = React.useState(false);
  const states = {
    idle: {
      background: 'var(--surface-card)',
      border: hovered ? '2px solid rgba(212,175,55,0.6)' : '2px solid rgba(255,255,255,0.1)',
      boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      color: 'var(--text-primary)',
      transform: hovered ? 'translateY(-1px)' : 'none'
    },
    selected: {
      background: 'rgba(212,175,55,0.08)',
      border: '2px solid #D4AF37',
      boxShadow: '0 0 0 4px rgba(212,175,55,0.15)',
      color: 'var(--text-primary)'
    },
    correct: {
      background: 'rgba(34,197,94,0.1)',
      border: '2px solid #22C55E',
      boxShadow: '0 0 0 4px rgba(34,197,94,0.15)',
      color: 'var(--text-primary)'
    },
    incorrect: {
      background: 'rgba(239,68,68,0.1)',
      border: '2px solid #EF4444',
      boxShadow: '0 0 0 4px rgba(239,68,68,0.15)',
      color: 'var(--text-primary)'
    },
    disabled: {
      background: 'rgba(255,255,255,0.03)',
      border: '2px solid rgba(255,255,255,0.06)',
      color: 'var(--text-disabled)',
      cursor: 'default',
      opacity: 0.5
    }
  };
  const icons = {
    idle: null,
    selected: null,
    correct: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: '#22C55E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))),
    incorrect: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: '#EF4444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "3",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }))),
    disabled: null
  };
  const st = states[state];
  return /*#__PURE__*/React.createElement("div", {
    onClick: state !== 'disabled' && state === 'idle' ? onClick : undefined,
    onMouseEnter: () => state === 'idle' && setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '16px 20px',
      borderRadius: 'var(--radius-xl)',
      cursor: state === 'idle' ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-inout)',
      userSelect: 'none',
      ...st,
      ...extraStyle
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: state === 'idle' ? hovered ? 'rgba(212,175,55,0.2)' : 'rgba(255,255,255,0.08)' : 'transparent',
      border: state === 'idle' ? `1px solid ${hovered ? 'rgba(212,175,55,0.5)' : 'rgba(255,255,255,0.15)'}` : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-sm)',
      color: state === 'idle' ? hovered ? 'var(--color-gold-400)' : 'var(--text-muted)' : 'transparent',
      flexShrink: 0,
      transition: 'all var(--dur-fast) var(--ease-inout)'
    }
  }, state === 'idle' ? label : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--leading-snug)',
      flex: 1
    }
  }, children), icons[state]);
}
Object.assign(__ds_scope, { AnswerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/AnswerCard.jsx", error: String((e && e.message) || e) }); }

// components/learning/PathNode.jsx
try { (() => {
/**
 * RK Empires — PathNode
 * Learning path node — represents a lesson/module on the scrollable path.
 */
function PathNode({
  status = 'locked',
  label,
  xp,
  icon,
  onClick,
  current = false,
  style: extraStyle = {}
}) {
  const [hovered, setHovered] = React.useState(false);
  const configs = {
    completed: {
      bg: 'linear-gradient(135deg, #ECC84A 0%, #D4AF37 50%, #B8860B 100%)',
      border: 'none',
      iconColor: '#0D0D0D',
      shadow: '0 4px 20px rgba(212,175,55,0.5), 0 2px 8px rgba(0,0,0,0.4)',
      cursor: 'pointer',
      opacity: 1
    },
    active: {
      bg: 'linear-gradient(135deg, #ECC84A 0%, #D4AF37 50%, #B8860B 100%)',
      border: '3px solid #FFFFFF',
      iconColor: '#0D0D0D',
      shadow: current ? '0 4px 24px rgba(212,175,55,0.7), 0 0 0 6px rgba(212,175,55,0.2)' : '0 4px 20px rgba(212,175,55,0.5)',
      cursor: 'pointer',
      opacity: 1,
      animation: 'rk-pulse-gold 2s ease-in-out infinite'
    },
    locked: {
      bg: '#252525',
      border: '2px solid rgba(255,255,255,0.1)',
      iconColor: '#555',
      shadow: 'var(--shadow-sm)',
      cursor: 'not-allowed',
      opacity: 0.6
    }
  };
  const cfg = configs[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: status !== 'locked' ? onClick : undefined,
    onMouseEnter: () => status !== 'locked' && setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: cfg.bg,
      border: cfg.border,
      boxShadow: cfg.shadow,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: cfg.cursor,
      opacity: cfg.opacity,
      transform: hovered && status !== 'locked' ? 'scale(1.08)' : 'scale(1)',
      transition: 'transform var(--dur-fast) var(--ease-spring), box-shadow var(--dur-normal) var(--ease-inout)',
      animation: status === 'active' ? 'rk-pulse-gold 2s ease-in-out infinite' : 'none',
      color: cfg.iconColor,
      fontSize: '28px',
      ...extraStyle
    }
  }, status === 'locked' ? /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#555",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })) : status === 'completed' ? /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#0D0D0D",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: cfg.iconColor,
      fontSize: '28px'
    }
  }, icon) : /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#0D0D0D",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: status === 'active' ? 'var(--fw-bold)' : 'var(--fw-medium)',
      color: status === 'locked' ? 'var(--text-muted)' : status === 'active' ? 'var(--color-gold-400)' : 'var(--text-secondary)',
      textAlign: 'center',
      maxWidth: '80px',
      lineHeight: 'var(--leading-snug)'
    }
  }, label), xp && status === 'completed' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--color-gold-500)',
      letterSpacing: '0.06em'
    }
  }, "+", xp, " IP"));
}
Object.assign(__ds_scope, { PathNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/PathNode.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.HeartIndicator = __ds_scope.HeartIndicator;

__ds_ns.LevelBadge = __ds_scope.LevelBadge;

__ds_ns.StreakBadge = __ds_scope.StreakBadge;

__ds_ns.XPBar = __ds_scope.XPBar;

__ds_ns.AnswerCard = __ds_scope.AnswerCard;

__ds_ns.PathNode = __ds_scope.PathNode;

})();
