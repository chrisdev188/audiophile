import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

export const StyledCheckout = styled.main`
  background-color: ${({ theme }) => theme.palette.card};
  padding-top: 5.5rem;
  form {
    display: grid;
    grid-row-gap: 3rem;
  }
  .container {
    padding-block: 7rem;
  }
  fieldset {
    border: none;
  }
  fieldset > legend {
    margin-bottom: 2.5rem;
  }
  fieldset > .field-grid {
    display: grid;
    gap: 3rem;
    ${media.up("sm")`
      grid-template-columns: 1fr 1fr;
      grid-column-gap:1.5rem;
    `}
  }

  fieldset > .field-grid > div {
    grid-column: span 1;
  }

  fieldset.shipping > .field-grid > div:first-child {
    grid-column: span 1;
    ${media.up("sm")`
      grid-column: span 2;
    `}
  }
`;

export const CheckoutSection = styled.section`
  grid-column: span 1;
  background-color: white;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  padding: 1.5rem;
  ${media.up("sm")`
    grid-column: span 6;
    padding: 2rem;
  `}
  ${media.up("md")`
    grid-column: span 8;
  `}
`;

export const SummarySection = styled.section`
  grid-column: span 1;
  background-color: white;
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  padding: 1.5rem;
  ${media.up("sm")`
    grid-column: span 6;
    padding: 2rem;
  `}
  ${media.up("md")`
    grid-column: span 4;
  `}
`;
