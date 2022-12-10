export type AlignItemsType =
  | "center"
  | "baseline"
  | "stretch"
  | "flex-start"
  | "flex-end";
export type AlignContentType =
  | "center"
  | "space-between"
  | "space-around"
  | "stretch"
  | "flex-start"
  | "flex-end";
export type JusifyContentType =
  | "center"
  | "space-between"
  | "space-around"
  | "stretch"
  | "flex-start"
  | "flex-end";

export interface IMediaQueriesStylesProps {
  items?: AlignItemsType;
  align?: AlignContentType;
  content?: JusifyContentType;
  direction?: "column" | "row";
  gap?: number;
  textAlign?: "center" | "left" | "right" | "unset";
  gutterBottom?: number;
  gutterTop?: number;
}

export interface IFlexProps extends React.HTMLAttributes<HTMLElement> {
  xs?: IMediaQueriesStylesProps;
  sm?: IMediaQueriesStylesProps;
  md?: IMediaQueriesStylesProps;
  lg?: IMediaQueriesStylesProps;
  xl?: IMediaQueriesStylesProps;
  component?: React.ComponentType | string;
}
