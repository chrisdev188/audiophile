import styled from "styled-components";
import { TwelveColumnsGrid } from "../../../globalStyles";

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
