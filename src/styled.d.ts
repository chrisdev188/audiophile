import "styled-components";

export interface IPalette {
  main: string;
  contrastText: string;
}
export interface ITypography {
  fontFamily: string;
  fontSize: string;
  fontWeight: 300 | 400 | 500 | 700;
  lineHeight: string;
  letterSpacing: string;
  textTransform?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: IPalette;
      secondary: IPalette;
      error: IPalette;
      divider: string;
      card: string;
      text: {
        dark: string;
        darkAlt: string;
        light: string;
        lightAlt: string;
        accent: string;
        error: string;
      };
    };
    typography: {
      h1: ITypography;
      h2: ITypography;
      h3: ITypography;
      h4: ITypography;
      h5: ITypography;
      h6: ITypography;
      body: ITypography;
      overline: ITypography;
      subtitle: ITypography;
      button: ITypography;
      navLink: ITypography;
    };
    mediaQueries: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
