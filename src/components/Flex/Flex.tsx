import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";
import { IFlexProps } from "./Flex.types";

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  gap: ${({ xs }) => `${xs?.gap}rem`};
  align-items: ${({ xs }) => xs?.items};
  justify-content: ${({ xs }) => xs?.content};
  align-content: ${({ xs }) => xs?.align};
  flex-direction: ${({ xs }) => xs?.direction};
  text-align: ${({ xs }) => xs?.textAlign};

  ${({ sm }) =>
    media.up("sm")(`
        gap:${`${sm?.gap}rem`};
        align-items:${sm?.items};
        justify-content:${sm?.content};
        align-content:${sm?.align};
        flex-direction:${sm?.direction};
        text-align:${sm?.textAlign};
    `)};

  ${({ md }) =>
    media.up("md")(`
        gap:${`${md?.gap}rem`};
        align-items:${md?.items};
        justify-content:${md?.content};
        align-content:${md?.align};
        flex-direction:${md?.direction};
        text-align:${md?.textAlign};
    `)};

  ${({ lg }) =>
    media.up("lg")(`
        gap:${`${lg?.gap}rem`};
        align-items:${lg?.items};
        justify-content:${lg?.content};
        align-content:${lg?.align};
        flex-direction:${lg?.direction};
        text-align:${lg?.textAlign};
    `)};

  ${({ xl }) =>
    media.up("xl")(`
        gap:${`${xl?.gap}rem`};
        align-items:${xl?.items};
        justify-content:${xl?.content};
        align-content:${xl?.align};
        flex-direction:${xl?.direction};
        text-align:${xl?.textAlign};
    `)};
`;

const Flex: React.FC<IFlexProps> = (props) => {
  const { component, children, ...otherProps } = props;
  return (
    <StyledFlex as={component} {...otherProps}>
      {children}
    </StyledFlex>
  );
};

Flex.defaultProps = {
  xs: {
    gap: 0,
    items: "stretch",
    content: "flex-start",
    align: "stretch",
    direction: "row",
    textAlign: "unset",
  },
};

export default Flex;
