import styled from "styled-components";
import { Container, HeadingLG, Main, TwelveColumnsGrid } from "../../styles";

export const ProductDetailsMain = styled(Main)`
  margin-top: 5.5rem;
`;
export const StyledProductPreview = styled(Container)`
  background-color: red;
`;
export const StyledProductFeatures = styled(Container)`
  background-color: green;
`;
export const StyledProductGallery = styled(Container)`
  background-color: pink;
`;

export const StyledAlsoLikeProducts = styled(TwelveColumnsGrid)`
  text-align: center;
  li {
    @media (min-width: 768px) {
      grid-column: span 4;
    }
  }
`;
export const AlsoLikeHeading = styled(HeadingLG)`
  text-align: center;
  margin-bottom: 4rem;
`;
export const AlsoLikeCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
