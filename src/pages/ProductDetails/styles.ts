import styled from "styled-components";
import { Container, HeadingLG, Main, TwelveColumnsGrid } from "../../styles";

export const ProductDetailsMain = styled(Main)`
  margin-top: 5.5rem;
`;
export const StyledProductPreview = styled(Container)`
  background-color: red;
`;
export const StyledProductFeatures = styled(TwelveColumnsGrid)`
  grid-row-gap: 8rem;
  .features {
    & > * + * {
      margin-top: 1.5rem;
    }
    @media (min-width: 768px) {
      grid-column: span 12;
    }
    @media (min-width: 1140px) {
      grid-column: span 7;
    }
  }
  .in-the-box {
    & > * + * {
      margin-top: 1.5rem;
    }
    @media (min-width: 768px) {
      grid-column: span 10;
    }
    @media (min-width: 1140px) {
      grid-column: 9 / span 4;
    }
    ul {
      & > * + * {
        margin-top: 1rem;
      }
    }
    li {
      display: flex;
      gap: 1rem;
      .quantity {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;
export const StyledProductGallery = styled(TwelveColumnsGrid)`
  grid-template-rows: 1fr 1fr 2fr;
  @media (min-width: 768px) {
    grid-template-rows: 1fr 1fr;
  }
  .top {
    grid-row: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    @media (min-width: 768px) {
      grid-column: 1 / span 6;
      grid-row: 1;
    }
  }
  .middle {
    grid-row: 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    @media (min-width: 768px) {
      grid-column: 1 / span 6;
      grid-row: 2;
    }
  }
  .bottom {
    grid-row: 3;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    @media (min-width: 768px) {
      grid-column: 7 / span 6;
      grid-row: 1 / span 2;
    }
  }
`;

export const StyledAlsoLikeProducts = styled(TwelveColumnsGrid)`
  text-align: center;
  gap: 3.5rem;
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
  img {
    border-radius: 8px;
  }
`;
