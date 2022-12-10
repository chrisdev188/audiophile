import styled from "styled-components";
import { ITypograpyProps } from "./Typography.types";

export const StyledTypography = styled.p<ITypograpyProps>`
  font-family: ${({ theme, variant }) =>
    variant && theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant }) =>
    variant && theme.typography[variant].fontSize};
  font-weight: ${({ theme, variant }) =>
    variant && theme.typography[variant].fontWeight};
  letter-spacing: ${({ theme, variant }) =>
    variant && theme.typography[variant].letterSpacing};
  line-height: ${({ theme, variant }) =>
    variant && theme.typography[variant].lineHeight};
  text-transform: ${({ theme, variant }) =>
    variant && theme.typography[variant].textTransform};
  color: ${({ textColor, theme }) => {
    if (textColor !== undefined) {
      return theme.palette.text[textColor];
    }
  }};
`;
