import { NavLink } from "react-router-dom";
import {
  StyledNavbar,
  Logo,
  InnerBox,
  MenuList,
  CartButton,
  ToggleMenuButton,
} from "./styles";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";

type MenuList = Array<{
  id: number;
  path: string;
  name: string;
}>;

interface NavbarProps {
  menuList: MenuList;
}

const Navbar: React.FC<NavbarProps> = ({ menuList }) => {
  return (
    <StyledNavbar as="nav">
      <InnerBox>
        <ToggleMenuButton aria-label="toggle menu">
          <img src={hamburger} alt="" aria-hidden />
        </ToggleMenuButton>
        <Logo>
          <img src={logo} alt="Audiophile" />
        </Logo>
        <MenuList>
          {menuList.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "activeLink" : undefined
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </MenuList>
        <CartButton aria-label="cart">
          <img src={cart} alt="" aria-hidden />
        </CartButton>
      </InnerBox>
    </StyledNavbar>
  );
};

export default Navbar;
