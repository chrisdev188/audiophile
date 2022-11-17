import { css } from "styled-components";
import { Variant, Inverted } from "./types";

export const getStylesBasedOnVariant = (
  variant: Variant,
  inverted: Inverted
) => {
  if (variant === "filled") {
    return css`
      background-color: ${({ theme }) =>
        inverted ? theme.colors.main : theme.colors.accent};
      color: white;
      border: 1px solid
        ${({ theme }) => (inverted ? theme.colors.main : theme.colors.accent)};
      &:hover {
        background-color: ${({ theme }) =>
          inverted ? theme.colors.mainHover : theme.colors.accentHover};
        border-color: ${({ theme }) =>
          inverted ? theme.colors.mainHover : theme.colors.accentHover};
      }
    `;
  } else {
    return css`
      background-color: transparent;
      color: ${({ theme }) =>
        inverted ? theme.colors.main : theme.colors.accent};
      border: 1px solid
        ${({ theme }) => (inverted ? theme.colors.main : theme.colors.accent)};
      :hover {
        background-color: ${({ theme }) =>
          inverted ? theme.colors.main : theme.colors.accent};
        color: white;
        border-color: ${({ theme }) =>
          inverted ? theme.colors.main : theme.colors.accent};
      }
    `;
  }
};
