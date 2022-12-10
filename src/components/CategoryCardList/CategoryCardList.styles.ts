import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

export const CategoryCard = styled.div`
  padding-top: 5rem;
  grid-column: span 1;
  position: relative;
  ${media.up("sm")`
    grid-column: span 2;
  `}
  ${media.up("md")`
    grid-column: span 4;
  `}
`;
export const CardMedia = styled.div`
  width: 10rem;
  grid-row: 1 / span 2;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-50% + 5rem));
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
export const CardBody = styled.div`
  background-color: ${({ theme }) => theme.palette.card};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  width: 100%;
  padding: 5rem 0 2rem 0;
  display: grid;
  justify-items: center;
  gap: 1rem;
`;
