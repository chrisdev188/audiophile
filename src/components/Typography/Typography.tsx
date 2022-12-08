import styled from "styled-components";

interface ITypograpyProps extends React.HTMLAttributes<HTMLElement> {
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
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "p" | "span";
  textColor?: "dark" | "light" | "accent" | "error" | "darkAlt" | "lightAlt";
  children?: React.ReactNode;
}

const StyledTypography = styled.p<ITypograpyProps>`
  font-family: ${({ theme, variant }) =>
    variant && theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant }) =>
    variant && theme.typography[variant].fontSize};
  font-weight: ${({ theme, variant }) =>
    variant && theme.typography[variant].fontWeight};
  letter-spacing: ${({ theme, variant }) =>
    variant && theme.typography[variant].letterSpacing};
  line-height: ${({ theme, variant }) =>
    variant && theme.typography[variant].lineHeight};
  text-transform: ${({ theme, variant }) =>
    variant && theme.typography[variant].textTransform};
  color: ${({ textColor, theme }) => {
    if (textColor !== undefined) {
      return theme.palette.text[textColor];
    }
  }};
`;

const Typograpy: React.FunctionComponent<ITypograpyProps> = (props) => {
  const { variant, component, children, ...otherProps } = props;
  return (
    <StyledTypography variant={variant} as={component} {...otherProps}>
      {children}
    </StyledTypography>
  );
};

Typograpy.defaultProps = {
  variant: "body",
  component: "p",
};

export default Typograpy;
