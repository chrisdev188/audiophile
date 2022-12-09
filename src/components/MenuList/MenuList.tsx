import { MenuItem, StyledMenuList, StyledNavLink } from "./MenuList.styles";

interface IMenuListProps {}

const MenuList: React.FunctionComponent<IMenuListProps> = (props) => {
  return (
    <StyledMenuList>
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
