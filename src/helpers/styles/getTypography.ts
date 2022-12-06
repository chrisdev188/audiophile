import { css, DefaultTheme } from "styled-components";
import { TypographyNameType } from "../../theme";

const getTypography = (name: TypographyNameType, theme: DefaultTheme) => {
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
