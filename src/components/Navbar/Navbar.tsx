import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import Container from "../Container/Container";
import CartIcon from "../icons/CartIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import LogoIcon from "../icons/LogoIcon";
import {
  LogoLink,
  MenuToggler,
  NavInnerBox,
  NavList,
  NavListItem,
  NavStyled,
  NavLink,
  CartToggler,
} from "./Navbar.styles";
import { INavbarProps } from "./Navbar.types";

const Navbar: React.FC<INavbarProps> = (props) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const navRef = useRef<HTMLElement>(null);

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
          <LogoLink to="/">
            <LogoIcon />
          </LogoLink>
          <NavList>
            <NavListItem>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/"
              >
                home
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/headphones"
              >
                headphones
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/speakers"
              >
                speakers
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/earphones"
              >
                earphones
              </NavLink>
            </NavListItem>
          </NavList>
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
