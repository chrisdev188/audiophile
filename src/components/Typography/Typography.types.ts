export interface ITypograpyProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "overline"
    | "subtitle";
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "small"
    | "p"
    | "span"
    | "legend";
  textColor?: "dark" | "light" | "accent" | "error" | "darkAlt" | "lightAlt";
  children?: React.ReactNode;
}
