import { css } from "styled-components";
import { Variant, Inverted } from "./types";

export const getStylesBasedOnVariant = (
  variant: Variant,
  inverted: Inverted
) => {
  if (variant === "filled") {
    return css`
      background-color: ${({ theme }) =>
        inverted ? theme.palette.primary.main : theme.palette.secondary.main};
      color: white;
      border: 1px solid
        ${({ theme }) =>
          inverted ? theme.palette.primary.main : theme.palette.secondary.main};
    `;
  } else {
    return css`
      background-color: transparent;
      color: ${({ theme }) =>
        inverted ? theme.palette.primary.main : theme.palette.secondary.main};
      border: 1px solid
        ${({ theme }) =>
          inverted ? theme.palette.primary.main : theme.palette.secondary.main};
      :hover {
        background-color: ${({ theme }) =>
          inverted ? theme.palette.primary.main : theme.palette.secondary.main};
        color: white;
        border-color: ${({ theme }) =>
          inverted ? theme.palette.primary.main : theme.palette.secondary.main};
      }
    `;
  }
};
