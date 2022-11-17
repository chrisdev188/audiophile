export type ButtonProps = {
  children?: React.ReactNode | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant: Variant;
  inverted?: Inverted;
};
export type Variant = "filled" | "outlined";
export type Inverted = true | false | undefined;
