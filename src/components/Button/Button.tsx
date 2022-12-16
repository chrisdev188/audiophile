import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  as = "button",
  ...otherProps
}) => {
  return (
    <StyledButton as={as} {...otherProps} tabIndex={0}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
};

export default Button;
