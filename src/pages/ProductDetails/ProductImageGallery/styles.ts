import styled from "styled-components";
import { TwelveColumnsGrid } from "../../../globalStyles";

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
