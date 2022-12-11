import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { CategoryCardList } from "..";
import { useClickOutside } from "../../hooks";
import Container from "../Container/Container";
import CartIcon from "../icons/CartIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import {
  MenuToggler,
  NavInnerBox,
  NavStyled,
  CartToggler,
  StyledMenuModal,
} from "./Navbar.styles";
import { INavbarProps } from "./Navbar.types";

const Navbar: React.FC<INavbarProps> = (props) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const menuModalRef = useRef<HTMLElement>(null);

  const handleClose = useCallback(() => {
    setIsMenuOpened(false);
  }, []);
  useClickOutside(menuModalRef, handleClose);

  // change nav background to main color when route is not home ("/")
  useEffect(() => {
    if (navRef.current) {
      if (pathname === "/") {
        navRef.current.style.backgroundColor = "transparent";
      } else {
        navRef.current.style.backgroundColor = theme.palette.primary.main;
      }
    }
  }, [pathname]);

  // we have to prevent event bubbling up when click on button
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpened((prevValue) => !prevValue);
  };

  return (
    <>
      <NavStyled {...props} ref={navRef}>
        <Container fullVertical>
          <NavInnerBox>
            <MenuToggler onClick={handleClick}>
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
      {isMenuOpened && (
        <StyledMenuModal>
          <Container
            fullVertical
            full
            className="content"
            refObject={menuModalRef}
          >
            <CategoryCardList />
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
