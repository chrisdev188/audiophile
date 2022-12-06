import { StyledButton } from "./Button.styles";
import { IButtonProps } from "./Button.types";

const Button: React.FC<IButtonProps> = ({
  children,
  color,
  variant,
  ...otherProps
}) => {
  return (
    <StyledButton variant={variant} color={color} {...otherProps}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
};

export default Button;
