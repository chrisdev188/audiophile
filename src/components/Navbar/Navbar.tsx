import { useRef } from "react";
import { CategoryCardList } from "..";
import { useNavigationContext } from "../../context/NavigationContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useClickOutside } from "../../hooks";
import Container from "../Container/Container";
import CartIcon from "../icons/CartIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import { useNavBackgroundChange } from "./Navbar.hooks";
import {
  MenuToggler,
  NavInnerBox,
  NavStyled,
  CartToggler,
  StyledMenuModal,
} from "./Navbar.styles";
import { INavbarProps } from "./Navbar.types";

const Navbar: React.FC<INavbarProps> = (props) => {
  const { getNumberOfItems } = useShoppingCartContext();
  const { isOpen, closeMenu, toggleMenu } = useNavigationContext();

  const navRef = useRef<HTMLElement>(null);
  const menuModalRef = useRef<HTMLElement>(null);
  const cartQuantity = getNumberOfItems();

  // handle close modal when click outside
  useClickOutside(menuModalRef, closeMenu);
  // change nav background when current page is not home ("/")
  useNavBackgroundChange(navRef);

  return (
    <>
      <NavStyled {...props} ref={navRef}>
        <Container fullVertical>
          <NavInnerBox>
            <MenuToggler onClick={(e) => toggleMenu(e)}>
              <HamburgerIcon />
            </MenuToggler>
            <Logo />
            <MenuList hideOnSmallScreen />
            <CartToggler>
              <CartIcon />
              {cartQuantity > 0 && (
                <span className="badge">{cartQuantity}</span>
              )}
            </CartToggler>
          </NavInnerBox>
        </Container>
      </NavStyled>
      {isOpen && (
        <StyledMenuModal>
          <nav className="content" ref={menuModalRef}>
            <CategoryCardList />
          </nav>
          <div className="overlay" />
        </StyledMenuModal>
      )}
    </>
  );
};

Navbar.defaultProps = {
  color: "secondary",
};

export default Navbar;
