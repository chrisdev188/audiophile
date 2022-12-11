export interface IContainerProps extends React.HTMLAttributes<HTMLElement> {
  full?: boolean;
  fullVertical?: boolean;
  children?: React.ReactNode;
  refObject?: React.RefObject<HTMLElement>;
}
