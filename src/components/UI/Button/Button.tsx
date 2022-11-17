import * as React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  variant,
  inverted,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} inverted={inverted} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
