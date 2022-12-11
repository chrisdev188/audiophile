import { useEffect, useRef } from "react";
import { CategoryCardList } from "..";
import { useClickOutside, useNavigationActions } from "../../hooks";
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
  const { isMenuOpen, closeMenu, toggleMenu } = useNavigationActions();

  const navRef = useRef<HTMLElement>(null);
  const menuModalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log("state of modal " + isMenuOpen);
  }, [isMenuOpen]);

  // handle close modal when click outside
  useClickOutside(menuModalRef, closeMenu);
  // change nav background when current page is not home ("/")
  useNavBackgroundChange(navRef);

  return (
    <>
      <NavStyled {...props} ref={navRef}>
        <Container fullVertical>
          <NavInnerBox>
            <MenuToggler onClick={toggleMenu}>
              <HamburgerIcon />
            </MenuToggler>
            <Logo />
            <MenuList hideOnSmallScreen />
            <CartToggler>
              <CartIcon />
            </CartToggler>
          </NavInnerBox>
        </Container>
      </NavStyled>
      {isMenuOpen && (
        <StyledMenuModal>
          <Container
            fullVertical
            full
            className="content"
            refObject={menuModalRef}
          >
            <CategoryCardList onClickOnLink={closeMenu} />
          </Container>
          <Container className="overlay" full fullVertical />
        </StyledMenuModal>
      )}
    </>
  );
};

Navbar.defaultProps = {
  color: "secondary",
};

export default Navbar;
