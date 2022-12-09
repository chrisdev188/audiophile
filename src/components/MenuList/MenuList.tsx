import { MenuItem, StyledMenuList, StyledNavLink } from "./MenuList.styles";

export interface IMenuListProps extends React.HTMLAttributes<HTMLElement> {
  hideOnSmallScreen?: boolean;
}

const MenuList: React.FunctionComponent<IMenuListProps> = ({
  hideOnSmallScreen,
  ...otherProps
}) => {
  return (
    <StyledMenuList hideOnSmallScreen={hideOnSmallScreen} {...otherProps}>
      <MenuItem>
        <StyledNavLink
          className={(props) => (props.isActive ? "active" : "")}
          to="/"
        >
          home
        </StyledNavLink>
      </MenuItem>
      <MenuItem>
        <StyledNavLink
          className={(props) => (props.isActive ? "active" : "")}
          to="/headphones"
        >
          headphones
        </StyledNavLink>
      </MenuItem>
      <MenuItem>
        <StyledNavLink
          className={(props) => (props.isActive ? "active" : "")}
          to="/speakers"
        >
          speakers
        </StyledNavLink>
      </MenuItem>
      <MenuItem>
        <StyledNavLink
          className={(props) => (props.isActive ? "active" : "")}
          to="/earphones"
        >
          earphones
        </StyledNavLink>
      </MenuItem>
    </StyledMenuList>
  );
};

export default MenuList;
