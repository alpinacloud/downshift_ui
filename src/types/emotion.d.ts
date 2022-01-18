import light from '../themes/light';

type ThemeSchema = typeof light;

declare module '@emotion/react' {
  export interface Theme extends ThemeSchema {}
}