import { StyledNavbar, InnerBox, CartButton, ToggleMenuButton } from "./styles";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import MenuList from "./MenuList";
import Logo from "../Logo/Logo";
import { NavbarProps } from "./types";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "styled-components";

const Navbar: React.FC<NavbarProps> = ({ menuList }) => {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const theme = useContext(ThemeContext);

  // when current page is not homepage, change nav's background color to main color
  useEffect(() => {
    if (navRef.current) {
      if (pathname !== "/") {
        navRef.current.style.backgroundColor = theme.colors.main;
      } else {
        navRef.current.style.backgroundColor = "transparent";
      }
    }
  }, [pathname]);

  return (
    <StyledNavbar as="nav" ref={navRef}>
      <InnerBox>
        <ToggleMenuButton aria-label="toggle menu">
          <img src={hamburger} alt="" aria-hidden />
        </ToggleMenuButton>
        <Logo />
        <MenuList menuList={menuList} />
        <CartButton aria-label="cart">
          <img src={cart} alt="" aria-hidden />
        </CartButton>
      </InnerBox>
    </StyledNavbar>
  );
};

export default Navbar;
