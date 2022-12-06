import styled from "styled-components";
import media from "../../utils/styles/mediaQueries";

export interface IContainerProps extends React.HTMLAttributes<HTMLElement> {
  full?: boolean;
  fullVertical?: boolean;
  children?: React.ReactNode;
  py?: number;
  px?: number;
}

const StyledContainer = styled.div<IContainerProps>`
  padding-inline: ${(props) =>
    props.full ? 0 : `max(1.5rem, calc((100vw - 1200px) / 2))`};
  ${(props) =>
    media.up("sm")(
      `padding-inline:${
        props.full ? 0 : `max(2.5rem, calc((100vw - 1200px) / 2))`
      }`
    )}
  padding-block: ${(props) => (props.fullVertical ? 0 : "16px")};
`;

const Container: React.FC<IContainerProps> = (props) => {
  const { children, ...others } = props;
  return <StyledContainer {...others}>{children}</StyledContainer>;
};

export default Container;
