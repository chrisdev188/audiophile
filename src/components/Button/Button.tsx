import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  as = "button",
  $variant,
  $color,
  ...otherProps
}) => {
  return (
    <StyledButton as={as} $variant={$variant} $color={$color} {...otherProps}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  $variant: "contained",
  $color: "primary",
};

export default Button;
