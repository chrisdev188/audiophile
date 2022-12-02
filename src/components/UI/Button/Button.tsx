import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button: React.FC<ButtonProps> = ({
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
