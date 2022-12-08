import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

type GapByScreenSizes = {
  rowGap?: number;
  colGap?: number;
};
interface IGridProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  xs?: GapByScreenSizes;
  sm?: GapByScreenSizes;
  md?: GapByScreenSizes;
  lg?: GapByScreenSizes;
  xl?: GapByScreenSizes;
}

const StyledGrid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ xs }) => `${xs?.rowGap}rem`};
  column-gap: ${({ xs }) => `${xs?.colGap}rem`};

  ${({ sm }) => {
    return media.up("sm")(`
      grid-template-columns: repeat(6, minmax(0, 1fr));
      row-gap: ${sm?.rowGap}rem;
      column-gap: ${sm?.colGap}rem;
    `);
  }}

  ${({ md }) => {
    return media.up("md")(`
      grid-template-columns: repeat(12, minmax(0, 1fr));
      row-gap: ${md?.rowGap}rem;
      column-gap: ${md?.colGap}rem;
    `);
  }}

  ${({ lg }) => {
    return media.up("lg")(`
      row-gap: ${lg?.rowGap}rem;
      column-gap: ${lg?.colGap}rem;
    `);
  }}

  ${({ xl }) => {
    return media.up("xl")(`
      row-gap: ${xl?.rowGap}rem;
      column-gap: ${xl?.colGap}rem;
    `);
  }}
`;

const Grid: React.FunctionComponent<IGridProps> = (props) => {
  const { children, ...otherProps } = props;

  return <StyledGrid {...otherProps}>{children}</StyledGrid>;
};

Grid.defaultProps = {
  xs: {
    rowGap: 1,
    colGap: 1,
  },
};

export default Grid;
