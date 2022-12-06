import { Link, NavLink as RouterNavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { centerElement, getTypography } from "../../utils/styles";
import media from "../../utils/styles/mediaQueries";
import Container from "../Container/Container";
import CartIcon from "../icons/CartIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import LogoIcon from "../icons/LogoIcon";

const NavStyled = styled.nav<React.HTMLAttributes<HTMLElement>>`
  ${(props) => {
    return css`
      color: ${props.theme.palette.primary.contrastText};
      background-color: ${props.theme.palette.primary.main};
    `;
  }}
`;

const NavInnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
  ${media.up("sm")`
    justify-content:flex-start;
    gap:1rem;
  `}
  ${media.up("md")`
    justify-content:space-between;
  `}
`;

const MenuToggler = styled.button`
  ${centerElement}
  padding: 0.5rem;
  ${media.up("md")`
    display: none;
  `}
`;

const LogoLink = styled(Link)`
  ${centerElement};
  background-color: transparent;
`;

const NavList = styled.ul`
  display: none;
  ${media.up("md")`
    display: flex;
  `}
`;

const NavListItem = styled.li`
  padding: 0;
`;

const NavLink = styled(RouterNavLink)`
  ${(props) => getTypography("navLink", props.theme)}
  padding: 0.75rem;
  &.active {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const CartToggler = styled.button`
  ${centerElement}
  padding: 0.5rem;
  ${media.up("sm")`
    margin-left:auto;
  `}
  ${media.up("md")`
    margin:0;
  `}
`;

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
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
