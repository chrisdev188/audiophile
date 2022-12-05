import { StyledNavbar, InnerBox, ToggleMenuButton, Overlay } from "./styles";
import MenuList from "./MenuList";
import Logo from "../Logo";
import { NavbarProps } from "./types";
import { useLocation } from "react-router-dom";
import { useContext, useRef } from "react";
import { ThemeContext } from "styled-components";
import ProductNavigation from "../ProductNavigation";
import CartButton from "../Cart/CartButton/CartButton";

const Navbar: React.FC<NavbarProps> = ({
  menuList,
  showMenu,
  setShowMenu,
  setShowCartModal,
  numberOfShoppingItem,
}) => {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const theme = useContext(ThemeContext);

  return (
    <StyledNavbar as="nav" ref={navRef} id="main-nav">
      <InnerBox>
        <ToggleMenuButton
          onClick={() => setShowMenu((prevValue) => !prevValue)}
          aria-label="toggle menu"
        >
          <img
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt=""
            aria-hidden
          />
        </ToggleMenuButton>
        <Logo />
        <MenuList menuList={menuList} />
        <CartButton
          setShowCartModal={setShowCartModal}
          numberOfShoppingItem={numberOfShoppingItem}
        />
      </InnerBox>
      {showMenu && (
        <Overlay>
          <div className="menu-wrapper">
            <ProductNavigation />
          </div>
        </Overlay>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
