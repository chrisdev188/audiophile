import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
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
} from "./Navbar.styles";
import { INavbarProps } from "./Navbar.types";

const Navbar: React.FC<INavbarProps> = (props) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);

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

  return (
    <NavStyled {...props} ref={navRef}>
      <Container fullVertical>
        <NavInnerBox>
          <MenuToggler>
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
  );
};

Navbar.defaultProps = {
  color: "secondary",
};

export default Navbar;
