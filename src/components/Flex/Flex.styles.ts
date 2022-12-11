import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";
import { IFlexProps } from "./Flex.types";

export const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  gap: ${({ xs }) => `${xs?.gap}rem`};
  align-items: ${({ xs }) => xs?.items};
  justify-content: ${({ xs }) => xs?.content};
  align-content: ${({ xs }) => xs?.align};
  flex-direction: ${({ xs }) => xs?.direction};
  flex-wrap: ${({ xs }) => xs?.wrap};
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
        flex-wrap:${sm?.wrap};
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
        flex-wrap:${md?.wrap};
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
        flex-wrap:${lg?.wrap};
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
        flex-wrap:${xl?.wrap};
        text-align:${xl?.textAlign};
        margin-top: ${`${xl?.gutterTop}rem`};
        margin-bottom: ${`${xl?.gutterBottom}rem`};
    `)};
`;
