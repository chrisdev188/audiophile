import styled from "styled-components";
import { centerElement } from "../../helpers/styles";
import Button from "./Button";
import { IButtonProps } from "./Button.types";

interface IButtonWithIconsProps extends IButtonProps {
  children?: React.ReactNode;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

const Icon = styled.span`
  ${centerElement}
`;

const ButtonWithIcons: React.FunctionComponent<IButtonWithIconsProps> = ({
  children,
  iconStart,
  iconEnd,
  ...otherProps
}) => {
  return (
    <Button {...otherProps}>
      {iconStart && <Icon>{iconStart}</Icon>}
      {children}
      {iconEnd && <Icon>{iconEnd}</Icon>}
    </Button>
  );
};

export default ButtonWithIcons;
