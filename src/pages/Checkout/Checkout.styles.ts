import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

export const StyledCheckout = styled.main`
  background-color: ${({ theme }) => theme.palette.card};
  padding-top: 5.5rem;
  .checkout,
  .summary {
    height: 1000px;
    grid-column: span 1;
    background-color: white;
    border-radius: ${({ theme }) => theme.shape.borderRadius.md};
    padding: 1.5rem;
  }
  ${media.up("sm")`
    .checkout, .summary{
      grid-column: span 6;
      padding: 2rem;
    }
  `}
  ${media.up("md")`
    .checkout{
      grid-column: span 8;
    }
    .summary{
      grid-column: span 4;
    }
  `}
`;
