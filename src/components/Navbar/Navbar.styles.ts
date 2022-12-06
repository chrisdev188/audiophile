import { Link, NavLink as RouterNavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { centerElement, getTypography } from "../../helpers/styles";
import media from "../../helpers/styles/mediaQueries";
import { INavbarProps } from "./Navbar.types";

export const NavStyled = styled.nav<INavbarProps>`
  ${(props) => {
    return css`
      color: ${props.theme.palette.primary.contrastText};
      background-color: ${props.theme.palette.primary.main};
    `;
  }}
`;

export const NavInnerBox = styled.div`
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

export const MenuToggler = styled.button`
  ${centerElement}
  padding: 0.5rem;
  ${media.up("md")`
    display: none;
  `}
`;

export const LogoLink = styled(Link)`
  ${centerElement};
  background-color: transparent;
`;

export const NavList = styled.ul`
  display: none;
  ${media.up("md")`
    display: flex;
  `}
`;

export const NavListItem = styled.li`
  padding: 0;
`;

export const NavLink = styled(RouterNavLink)`
  ${(props) => getTypography("navLink", props.theme)}
  padding: 0.75rem;
  &.active {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const CartToggler = styled.button`
  ${centerElement}
  padding: 0.5rem;
  ${media.up("sm")`
    margin-left:auto;
  `}
  ${media.up("md")`
    margin:0;
  `}
`;
