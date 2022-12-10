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
  margin-top: ${({ xs }) => `${xs?.gutterTop}rem`};
  margin-bottom: ${({ xs }) => `${xs?.gutterBottom}rem`};

  ${({ sm }) =>
    media.up("sm")(`
        gap:${`${sm?.gap}rem`};
        align-items:${sm?.items};
        justify-content:${sm?.content};
        align-content:${sm?.align};
        flex-direction:${sm?.direction};
        text-align:${sm?.textAlign};
        margin-top: ${`${sm?.gutterTop}rem`};
        margin-bottom: ${`${sm?.gutterBottom}rem`};
    `)};

  ${({ md }) =>
    media.up("md")(`
        gap:${`${md?.gap}rem`};
        align-items:${md?.items};
        justify-content:${md?.content};
        align-content:${md?.align};
        flex-direction:${md?.direction};
        text-align:${md?.textAlign};
        margin-top: ${`${md?.gutterTop}rem`};
        margin-bottom: ${`${md?.gutterBottom}rem`};
    `)};

  ${({ lg }) =>
    media.up("lg")(`
        gap:${`${lg?.gap}rem`};
        align-items:${lg?.items};
        justify-content:${lg?.content};
        align-content:${lg?.align};
        flex-direction:${lg?.direction};
        text-align:${lg?.textAlign};
        margin-top: ${`${lg?.gutterTop}rem`};
        margin-bottom: ${`${lg?.gutterBottom}rem`};
    `)};

  ${({ xl }) =>
    media.up("xl")(`
        gap:${`${xl?.gap}rem`};
        align-items:${xl?.items};
        justify-content:${xl?.content};
        align-content:${xl?.align};
        flex-direction:${xl?.direction};
        text-align:${xl?.textAlign};
        margin-top: ${`${xl?.gutterTop}rem`};
        margin-bottom: ${`${xl?.gutterBottom}rem`};
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
    gutterBottom: 0,
    gutterTop: 0,
  },
};

export default Flex;
