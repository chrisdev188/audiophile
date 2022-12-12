import { useRef } from "react";
import { useNavigationContext } from "../../context/NavigationContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useClickOutside } from "../../hooks";
import CategoryCardList from "../CategoryCardList/CategoryCardList";
import { StyledMenuModal } from "./MenuModal.styles";

export interface IMenuModalProps {}

const MenuModal: React.FunctionComponent<IMenuModalProps> = (props) => {
  const { closeMenu } = useNavigationContext();
  const menuModalRef = useRef<HTMLElement>(null);

  useClickOutside(menuModalRef, closeMenu);

  return (
    <StyledMenuModal {...props}>
      <nav className="content" ref={menuModalRef}>
        <CategoryCardList />
      </nav>
      <div className="overlay" />
    </StyledMenuModal>
  );
};

export default MenuModal;
