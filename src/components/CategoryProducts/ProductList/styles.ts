import styled from "styled-components";
import {
  Container,
  Overline,
  Paragraph,
  TwelveColumnsGrid,
} from "../../../styles";

export const StyledProductList = styled(Container)`
  ul {
    display: flex;
    flex-direction: column;
    gap: 7rem;
  }
`;

export const StyledProductItem = styled(TwelveColumnsGrid)`
  grid-column: span 1;
  display: grid;
  .text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    grid-column: span 12;
    align-items: center;
    .img-container,
    .text {
      grid-column: span 12;
      margin-top: 0;
    }
  }
  @media (min-width: 1140px) {
    .img-container {
      grid-column: span 6;
      margin-top: 0;
      &.odds {
        grid-column: 7 / span 6;
        grid-row: 1;
      }
    }
    .text {
      margin-top: 0;
      grid-column: 8 / span 5;
      align-items: start;
      text-align: left;
      &.odds {
        grid-column: 1 / span 5;
        grid-row: 1;
      }
    }
  }
`;

export const StyledOverline = styled(Overline)`
  color: ${({ theme }) => theme.colors.accent};
`;

export const StyledDescription = styled(Paragraph)`
  margin-bottom: 1rem;
`;
