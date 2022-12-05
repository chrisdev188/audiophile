export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: Variant;
  inverted?: Inverted;
};
export type Variant = "filled" | "outlined";
export type Inverted = true | false | undefined;
export interface ButtonTextProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
