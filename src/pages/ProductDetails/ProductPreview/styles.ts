import styled from "styled-components";
import { Overline, TwelveColumnsGrid } from "../../../globalStyles";

export const StyledProductPreview = styled(TwelveColumnsGrid)`
  gap: 3rem;
  @media (min-width: 768px) {
    align-items: center;
  }
  .image-container {
    @media (min-width: 768px) {
      grid-column: 1 / span 6;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    & > * + * {
      margin-top: 2rem;
    }
    @media (min-width: 768px) {
      grid-column: 8 / span 5;
    }
  }
  .actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const PreviewOverline = styled(Overline)`
  color: ${({ theme }) => theme.colors.accent};
`;
