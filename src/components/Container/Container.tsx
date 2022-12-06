import { StyledContainer } from "./Container.styles";
import { IContainerProps } from "./Container.types";

const Container: React.FC<IContainerProps> = (props) => {
  const { children, ...others } = props;
  return <StyledContainer {...others}>{children}</StyledContainer>;
};

export default Container;
