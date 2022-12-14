import { StyledButton } from "./Button.styles";
import { IButtonProps } from "./Button.types";

const Button: React.FC<IButtonProps> = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
};

export default Button;
