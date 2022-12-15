import styled from "styled-components";

export const ShoppingItemWrapper = styled.div``;

export const ShoppingItemName = styled.span`
  font-family: Manrope, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  color: #000;
`;

export const ShoppingItemThumbnail = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: var(--round-sm);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

export const ItemQuantity = styled.span`
  font-family: Manrope, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.darkAlt};
`;
