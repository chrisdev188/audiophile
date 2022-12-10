export type GapByScreenSizes = {
  rowGap?: number;
};
export interface IGridProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  xs?: GapByScreenSizes;
  sm?: GapByScreenSizes;
  md?: GapByScreenSizes;
  lg?: GapByScreenSizes;
  xl?: GapByScreenSizes;
}
