import styled from "styled-components";
import { ButtonProps } from "./types";
import { getStylesBasedOnVariant } from "./helpers";

export const StyledButton = styled.button<ButtonProps>`
  font-size: 13px;
  font-weight: bold;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 300ms ease;
  cursor: pointer;
  ${({ variant, inverted }) => getStylesBasedOnVariant(variant, inverted)}
`;

export const StyledButtonText = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  color: hsla(0, 0%, 0%, 0.5);
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
