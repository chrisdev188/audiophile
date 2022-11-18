import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media (min-width: 768px) {
    padding-inline: 2.5rem; // 768px up
  }
`;
export const InnerBox = styled.div`
  max-width: 1140px;
  height: 5.5rem;
  padding-inline: 1rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 450px) {
    justify-content: start;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    padding-inline: 0;
    justify-content: space-between;
  }
`;
export const Logo = styled.div``;
export const MenuList = styled.ul`
  display: none;
  a {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    &.activeLink {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;
export const CartButton = styled.button`
  @media (min-width: 450px) {
    margin-left: auto;
  }
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;
export const ToggleMenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
`;
