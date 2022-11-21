import { StyledMenuList } from "./styles";
import { MenuListType } from "../../types";
import { NavLink } from "react-router-dom";

interface MenuListProps {
  menuList: MenuListType;
}

const MenuList: React.FunctionComponent<MenuListProps> = ({ menuList }) => {
  return (
    <StyledMenuList>
      {menuList.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
