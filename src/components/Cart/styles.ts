import styled from "styled-components";
import { MaxWidthContainer } from "../../globalStyles";

export const StyledCartButton = styled.button`
  position: relative;
  @media (min-width: 450px) {
    margin-left: auto;
  }
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const StyledCartBadge = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  font-size: 11px;
  border-radius: 50%;
  background-color: red;
  color: white;
  display: grid;
  align-items: center;
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
`;
export const StyledCartModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: calc(100vh);
  padding: 7.5rem 0 0 0;
  z-index: 998;
  .content {
    background: white;
    width: 25rem;
    padding: 1.5rem;
    border-radius: 8px;
  }
  @media (min-width: 768px) {
    padding: 7.5rem 2.5rem 2.5rem 2.5rem;
  }
`;

export const CartModalMaxWidthContainer = styled(MaxWidthContainer)`
  display: flex;
  justify-content: flex-end;
`;

export const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
