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

export const StyledMenuModal = styled.div`
  z-index: 999;
  position: relative;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .content {
    position: absolute;
    top: 5.5rem;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    padding-block: 3rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
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
  ${media.up("sm")`
    margin-left:auto;
  `}
  ${media.up("md")`
    margin:0;
  `}
`;
