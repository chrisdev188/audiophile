import styled, { css } from "styled-components";
import { centerElement, getTypography } from "../../helpers/styles";
import media from "../../helpers/styles/mediaQueries";
import { INavbarProps } from "./Navbar.types";

export const NavStyled = styled.nav<INavbarProps>`
  position: absolute;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
`;

export const NavInnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
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

export const CartToggler = styled.button`
  ${centerElement}
  padding: 0.5rem;
  position: relative;
  .badge {
    ${centerElement}
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.palette.error.main};
    color: ${({ theme }) => theme.palette.error.contrastText};
    font-size: 13px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
  }

  ${media.up("sm")`
    margin-left:auto;
  `}

  ${media.up("md")`
    margin:0;
  `}
`;
