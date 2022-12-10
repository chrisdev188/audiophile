import { StyledFlex } from "./Flex.styles";
import { IFlexProps } from "./Flex.types";

const Flex: React.FC<IFlexProps> = (props) => {
  const { component, children, ...otherProps } = props;
  return (
    <StyledFlex as={component} {...otherProps}>
      {children}
    </StyledFlex>
  );
};

Flex.defaultProps = {
  xs: {
    gap: 0,
    items: "stretch",
    content: "flex-start",
    align: "stretch",
    direction: "row",
    textAlign: "unset",
    gutterBottom: 0,
    gutterTop: 0,
  },
};

export default Flex;
