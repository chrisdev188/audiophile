import { Link } from "react-router-dom";
import { MenuListType } from "../../globalTypes";
import { StyledMenuList } from "./styles";

interface MenuListProps {
  menuList: MenuListType;
}

const MenuList: React.FunctionComponent<MenuListProps> = ({ menuList }) => {
  return (
    <StyledMenuList>
      {menuList.map((item) => (
        <li key={item.id}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
