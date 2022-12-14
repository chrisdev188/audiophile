import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";
import { ProductCardProps } from "./ProductCard.types";

export const StyledProductCard = styled.article<ProductCardProps>`
  .card-body {
    max-width: 35rem;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    ${media.up("sm")`
      grid-column: span 6;
      align-items:center;
      text-align: center;
    `}
    ${media.up("md")`
      grid-column: 8 / span 5;
      align-self: center;
      align-items:flex-start;
      text-align: left;
    `}
    ${media.up("lg")`
      grid-column: 8 / span 5;
    `}
  }
  .card-media {
    width: 100%;
    border-radius: var(--round-md);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    ${media.up("sm")`
      grid-column: span 6;
      align-self: center;
    `}
    ${media.up("md")`
      grid-column: span 6;
    `}
  }
  &.odds {
    ${media.up("md")`
      .card-body {
        order: -1;
        grid-column:1 / span 5;
      }
      .card-media {
        grid-column:7 / span 6;
      }
    `}
  }
`;
