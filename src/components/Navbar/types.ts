import { MenuListType } from "../../globalTypes";
export interface NavbarProps {
  menuList: MenuListType;
  showMenu: true | false;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
