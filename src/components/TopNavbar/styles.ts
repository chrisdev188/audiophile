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
export const Overlay = styled(Container)`
  position: absolute;
  top: 5.5rem;
  left: 0;
  right: 0;
  height: calc(100vh - 5.5rem);
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;

  .menu-wrapper {
    background-color: white;
    padding-top: 7rem;
    padding-bottom: 2rem;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
export const ToggleMenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
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
