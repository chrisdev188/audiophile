import styled from "styled-components";
import { Container, MaxWidthContainer } from "../../globalStyles";

export const StyledNavbar = styled(Container)`
  background-color: transparent;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;
export const InnerBox = styled(MaxWidthContainer)`
  height: 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  @media (min-width: 450px) {
    justify-content: start;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
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
