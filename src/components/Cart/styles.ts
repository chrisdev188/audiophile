import styled from "styled-components";

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
  width: 5rem;
  height: 5rem;
  background-color: blue;
`;
