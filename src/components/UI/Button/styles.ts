import styled from "styled-components";
import { ButtonProps } from "./types";
import { getStylesBasedOnVariant } from "./helpers";

export const StyledButton = styled.button<ButtonProps>`
  font-size: 14px;
  font-weight: bold;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 300ms ease;
  cursor: pointer;
  ${({ variant, inverted }) => getStylesBasedOnVariant(variant, inverted)}
`;
