import { StyledGrid } from "./Grid.styles";
import { IGridProps } from "./Grid.types";

const Grid: React.FunctionComponent<IGridProps> = (props) => {
  const { children, ...otherProps } = props;

  return <StyledGrid {...otherProps}>{children}</StyledGrid>;
};

Grid.defaultProps = {
  xs: {
    rowGap: 1,
  },
};

export default Grid;
