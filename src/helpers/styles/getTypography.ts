import { css, DefaultTheme } from "styled-components";

const getTypography = (
  name:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "navLink"
    | "button"
    | "overline"
    | "subtitle",
  theme: DefaultTheme
) => {
  const typography = theme.typography[name];
  return css`
    font-family: ${typography.fontFamily};
    font-size: ${typography.fontSize};
    font-weight: ${typography.fontWeight};
    line-height: ${typography.lineHeight};
    letter-spacing: ${typography.letterSpacing};
    text-transform: ${typography.textTransform};
  `;
};

export default getTypography;
