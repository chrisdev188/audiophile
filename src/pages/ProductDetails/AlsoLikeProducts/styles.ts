import styled from "styled-components";
import { HeadingLG, TwelveColumnsGrid } from "../../../globalStyles";

export const StyledAlsoLikeProducts = styled(TwelveColumnsGrid)`
  text-align: center;
  gap: 3.5rem;
  justify-content: center;
  li {
    @media (min-width: 768px) {
      grid-column: span 4;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
