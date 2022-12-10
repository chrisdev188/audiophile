import { StyledTypography } from "./Typography.styles";
import { ITypograpyProps } from "./Typography.types";

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
