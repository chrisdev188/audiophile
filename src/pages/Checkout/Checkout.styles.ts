import styled from "styled-components";
import { Button } from "../../components";
import media from "../../helpers/styles/mediaQueries";

export const StyledCheckout = styled.main`
  background-color: ${({ theme }) => theme.palette.card};
  padding-top: var(--nav-height);
  .fieldset-container {
    display: grid;
    grid-row-gap: 5rem;
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
      grid-column-gap:1rem;
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

  fieldset.payment > .field-grid {
    grid-row-gap: 3rem;
    ${media.up("sm")`
      grid-column-gap:1rem;
      grid-row-gap:3rem;
    `}
  }

  fieldset.payment > legend {
    margin-bottom: 1rem;
  }

  fieldset.payment .inputs {
    & > * + * {
      margin-top: 1rem;
    }
  }

  fieldset.payment .payment-methods {
    display: grid;
    grid-column: span 1;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    ${media.up("sm")`
      grid-column: span 2;
      grid-template-columns:1fr 1fr;
    `}
  }

  fieldset.payment .payment-heading {
    font-family: Manrope, sans-serif;
    font-size: 13px;
    display: absolute;
  }

  fieldset.payment .cash-content {
    grid-column: span 1;
    text-align: center;
    ${media.up("sm")`
      grid-column: span 2;
      text-align: left;
    `}
  }
`;

export const CheckoutSection = styled.section`
  grid-column: span 1;
  background-color: white;
  border-radius: var(--round-md);
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
  border-radius: var(--round-md);
  padding: 1.5rem;
  align-self: flex-start;
  & > * + * {
    margin-top: 2rem;
  }
  ${media.up("sm")`
    grid-column: span 6;
    padding: 2rem;
  `}
  ${media.up("md")`
    grid-column: span 4;
  `}
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;
