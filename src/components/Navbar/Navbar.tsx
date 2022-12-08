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
  return (
    <NavStyled {...props}>
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