import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";
import { IGridProps } from "./Grid.types";

export const StyledGrid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ xs }) => `${xs?.rowGap}rem`};
  column-gap: 1rem;

  ${({ sm }) => {
    return media.up("sm")(`
      grid-template-columns: repeat(6, minmax(0, 1fr));
      row-gap: ${sm?.rowGap}rem;
      column-gap: 1.5rem;
    `);
  }}

  ${({ md }) => {
    return media.up("md")(`
      grid-template-columns: repeat(12, minmax(0, 1fr));
      row-gap: ${md?.rowGap}rem;
      column-gap: 2rem;
    `);
  }}

  ${({ lg }) => {
    return media.up("lg")(`
      row-gap: ${lg?.rowGap}rem;
      column-gap: 2.5rem;
    `);
  }}

  ${({ xl }) => {
    return media.up("xl")(`
      row-gap: ${xl?.rowGap}rem;
    `);
  }}
`;
