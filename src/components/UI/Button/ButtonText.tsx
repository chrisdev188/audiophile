// import arrowIcon from "../../../assets/shared/desktop/icon-arrow-right.svg";
import { StyledButtonText } from "./styles";
import { ButtonTextProps } from "./types";

const ButtonText: React.FunctionComponent<ButtonTextProps> = ({
  children,
  onClick,
}) => {
  return (
    <StyledButtonText onClick={onClick}>
      {children}
      <span>
        <img
          src="/assets/shared/desktop/icon-arrow-right.svg"
          alt=""
          aria-hidden={true}
        />
      </span>
    </StyledButtonText>
  );
};

export default ButtonText;
