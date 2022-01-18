const light = {
  color: {
    surface: '#fff',
    surfaceContrast: '#f9f9f9',
    accent: '#93c5fd',

    primary: '#1d4ed8',
    primaryHard: '#1e40af',
    primaryText: '#fff',

    disabled: '#475569',
    disabledText: '#fff',

    error: 'rgba(220, 38, 38, 1)',
    errorText: '#fef2f2',
    warning: 'rgba(245, 158, 11, 1)',
    warningText: '#fff7ed',
    success: 'rgba(22, 163, 74, 1)',
    successText: '#f0fdf4',

    contrast: '#cbd5e1',
    contrastHard: '#94a3b8',

    heading: 'rgb(12, 22, 32)',
    text: 'rgb(55, 65, 81)',

    overlayBackground: 'rgba(232, 242, 255, 0.6)',
  },
  disabledOpacity: 0.7,
  radius: 3,
  speed: 0.25,
  space: {
    sm: 8,
    md: 12,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
  font: {
    body: 'system-ui, sans-serif',
    monospace: 'monospace',
    heading: 'inherit',
  },
  fontSize: {
    sm: 14,
    md: 15,
    lg: 20,
    xl: 27,
    xxl: 35,
  },
  fontWeight: {
    thin: 300,
    normal: 500,
    heavy: 700,
    black: 900,
  },
  shadow: {
    ring: (props) => `0 0 0 3px ${props.theme.color.accent}`,
    successRing: (props) => `0 0 0 3px rgba(22, 163, 74, 0.5)`,
    warningRing: (props) => `0 0 0 3px rgba(245, 158, 11, 0.5)`,
    errorRing: (props) => `0 0 0 3px rgba(220, 38, 38, 0.5)`,

    sm: '0 1px 2px rgba(50, 50, 50, 0.15)',
    md: '0 2px 3px rgba(50, 50, 50, 0.2)',
    lg: '0 0 12px rgba(0, 0, 0, .1)',
  },
};

export type ThemeSchema = typeof light;
export default light;
