import styled from "styled-components";
import { getTypography } from "../../helpers/styles";
import { getButtonStyles } from "./Button.helpers";
import { IButtonProps } from "./Button.types";

export const StyledButton = styled.button<IButtonProps>`
  ${({ color, variant, theme }) => {
    if (color !== undefined && variant !== undefined) {
      return getButtonStyles(color, theme, variant);
    }
  }}
  ${({ theme }) => getTypography("button", theme)}
  padding:.75rem 1rem;
  display: flex;
  align-items: center;
`;
