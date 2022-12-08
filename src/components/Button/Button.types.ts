export type TButtonColor = "primary" | "secondary";
export type TButtonVariant = "contained" | "outlined" | "text";
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  color?: TButtonColor;
  children?: React.ReactNode;
}
