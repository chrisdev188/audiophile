import { MenuListType } from "../../globalTypes";
export interface NavbarProps {
  menuList: MenuListType;
  showMenu: true | false;
  handleShowMenu: () => void;
}
