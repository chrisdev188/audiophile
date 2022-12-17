import styled from "styled-components";
import { getTypography } from "../../helpers/styles";
import { getButtonStyles } from "./Button.helpers";
import { BaseProps } from "./Button.types";

export const StyledButton = styled.button<BaseProps>`
  ${({ $color, $variant, theme }) => {
    if ($color !== undefined && $variant !== undefined) {
      return getButtonStyles($color, theme, $variant);
    }
  }}
  ${({ theme }) => getTypography("button", theme)}
  padding:.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 300ms ease;
  &:disabled {
    cursor: not-allowed;
    background-color: lightgray;
    border-color: lightgray;
  }
`;
