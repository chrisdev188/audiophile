import styled from "styled-components";
import { TwelveColumnsGrid } from "../../styles";
export const CategoryList = styled(TwelveColumnsGrid)`
  gap: 7rem;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
export const CategoryItem = styled.li`
  padding: 5rem 1rem 2.5rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  position: relative;
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;
export const ProductThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 10rem;
`;
