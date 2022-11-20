import { StyledNavbar, InnerBox, CartButton, ToggleMenuButton } from "./styles";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import MenuList from "./MenuList";
import Logo from "../Logo/Logo";
import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ menuList }) => {
  return (
    <StyledNavbar as="nav">
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
