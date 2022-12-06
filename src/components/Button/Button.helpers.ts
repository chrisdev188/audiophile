import { css, DefaultTheme } from "styled-components";
import { TButtonColor, TButtonVariant } from "./Button.types";

export const getButtonStyles = (
  color: TButtonColor,
  theme: DefaultTheme,
  variant: TButtonVariant
) => {
  if (variant === "contained") {
    return css`
      background-color: ${theme.palette[color].main};
      color: ${theme.palette[color].contrastText};
      border: 2px solid ${theme.palette[color].main};
    `;
  }
  if (variant === "outlined") {
    return css`
      background-color: transparent;
      color: ${theme.palette[color].main};
      border: 2px solid ${theme.palette[color].main};
    `;
  }
  if (variant === "text") {
    return css`
      background-color: transparent;
      color: ${theme.palette.text.darkAlt};
      border: 2px solid transparent;
    `;
  }
};
