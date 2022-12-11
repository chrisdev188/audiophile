import { StyledContainer } from "./Container.styles";
import { IContainerProps } from "./Container.types";

const Container: React.FC<IContainerProps> = (props) => {
  const { refObject, children, ...others } = props;
  return (
    <StyledContainer
      ref={refObject as React.RefObject<HTMLDivElement>}
      {...others}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
