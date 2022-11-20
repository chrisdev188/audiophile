import styled from "styled-components";
import { Container, MaxWidthContainer } from "../../globalStyles";

export const StyledAbout = styled(Container)`
  margin-block: 10rem;
`;

export const ImageContainer = styled.div`
  grid-column: span 1;
  grid-row: span 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  @media (min-width: 768px) {
    grid-column: span 12;
  }
  @media (min-width: 1140px) {
    grid-column: 7 / span 6;
    grid-row: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  h3 {
    margin-top: 1rem;
    span {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  @media (min-width: 768px) {
    grid-column: 2 / span 10;
    h3 {
      margin-top: 2rem;
    }
  }
  @media (min-width: 1140px) {
    grid-column: 1 / span 5;
    align-self: center;
    text-align: left;
  }
`;
