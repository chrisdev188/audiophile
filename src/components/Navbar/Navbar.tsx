import { useRef } from "react";
import { useNavigationContext } from "../../context/NavigationContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import {
  MenuToggler,
  NavInnerBox,
  NavStyled,
  CartToggler,
} from "./Navbar.styles";
import { INavbarProps } from "./Navbar.types";
import { useNavBackgroundChange } from "./Navbar.hooks";
import Container from "../Container/Container";
import CartIcon from "../icons/CartIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import MenuModal from "../MenuModal/MenuModal";
import ShoppingCartModal from "../ShoppingCartModal/ShoppingCartModal";

const Navbar: React.FC<INavbarProps> = (props) => {
  const { isCartModalOpen, getNumberOfItems, toggleCartModal } =
    useShoppingCartContext();
  const { isOpen, toggleMenu } = useNavigationContext();

  const navRef = useRef<HTMLElement>(null);

  const cartQuantity = getNumberOfItems();

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
            <CartToggler
              onClick={(e) => {
                e.stopPropagation();
                toggleCartModal(e);
              }}
            >
              <CartIcon />
              {cartQuantity > 0 && (
                <span className="badge">{cartQuantity}</span>
              )}
            </CartToggler>
          </NavInnerBox>
        </Container>
      </NavStyled>

      {isOpen && <MenuModal />}
      {isCartModalOpen && <ShoppingCartModal />}
    </>
  );
};

Navbar.defaultProps = {
  color: "secondary",
};

export default Navbar;
