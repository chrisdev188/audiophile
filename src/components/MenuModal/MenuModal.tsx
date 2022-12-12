import { useRef } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useClickOutside } from "../../hooks";
import CategoryCardList from "../CategoryCardList/CategoryCardList";
import { StyledMenuModal } from "./MenuModal.styles";

export interface IMenuModalProps {}

const MenuModal: React.FunctionComponent<IMenuModalProps> = (props) => {
  const { closeCartModal } = useShoppingCartContext();
  const menuModalRef = useRef<HTMLElement>(null);

  useClickOutside(menuModalRef, closeCartModal);

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
