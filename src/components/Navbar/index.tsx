import { StyledNavbar, InnerBox, ToggleMenuButton } from "./styles";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import MenuList from "./MenuList";
import Logo from "../Logo";
import { NavbarProps } from "./types";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "styled-components";
import ProductCategoryList from "../ProductCategoryList";
import CartButton from "../Cart/CartButton";

const Navbar: React.FC<NavbarProps> = ({
  menuList,
  showMenu,
  setShowMenu,
  setShowCartModal,
}) => {
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
        <ToggleMenuButton
          onClick={() => setShowMenu((prevValue) => !prevValue)}
          aria-label="toggle menu"
        >
          <img src={hamburger} alt="" aria-hidden />
        </ToggleMenuButton>
        <Logo />
        <MenuList menuList={menuList} />
        <CartButton setShowCartModal={setShowCartModal} />
      </InnerBox>

      {showMenu && (
        <div className="overlay">
          <div className="menu-wrapper">
            <ProductCategoryList />
          </div>
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
