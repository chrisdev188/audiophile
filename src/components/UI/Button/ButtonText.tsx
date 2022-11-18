import styled from "styled-components";
import arrowIcon from "../../../assets/shared/desktop/icon-arrow-right.svg";

const StyledButtonText = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  color: hsla(0, 0%, 0%, 0.5);
`;

interface ButtonTextProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonText: React.FunctionComponent<ButtonTextProps> = ({
  children,
  onClick,
}) => {
  return (
    <StyledButtonText onClick={onClick}>
      {children}
      <span>
        <img src={arrowIcon} alt="" aria-hidden={true} />
      </span>
    </StyledButtonText>
  );
};

export default ButtonText;
