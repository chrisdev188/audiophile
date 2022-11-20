import styled from "styled-components";
import { HeadingOne, Paragraph, Container } from "../../globalStyles";
import circlePatterns from "../../assets/home/desktop/pattern-circles.svg";

export const StyledHomeProductGallery = styled(Container)`
  margin-block: 10rem;
`;

export const ZX9Speaker = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  grid-column: 1;
  grid-row: span 1;
  display: grid;
  place-items: center;
  padding: 3rem 1rem;
  background-image: url(${circlePatterns});
  background-size: cover;
  background-position: center -150px;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    background-position: center -300px;
    grid-column: span 12;
    padding: 4rem 2rem;
  }
  @media (min-width: 1140px) {
    background-position: -250px -150px;
    padding: 8rem 6rem;
    place-items: end;
  }
`;
export const ZX9Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  max-width: 22rem;
  img {
    width: 11rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    gap: 2rem;
    img {
      width: 12rem;
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 1140px) {
    align-items: start;
    text-align: left;
    gap: 2.5rem;
    img {
      width: 25rem;
      margin-bottom: 0;
      position: absolute;
      left: 117px;
      bottom: -1.5rem;
    }
  }
`;
export const ZX7Speaker = styled.div`
  min-height: 320px;
  grid-column: 1;
  grid-row: span 1;
  position: relative;
  display: flex;
  place-items: center;
  justify-content: left;
  padding: 3rem 2rem;
  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
  }
  @media (min-width: 768px) {
    grid-column: span 12;
    padding: 4rem;
  }
`;
export const YX1EarphoneImg = styled.div`
  min-height: 320px;
  grid-column: 1;
  grid-row: span 1;
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    grid-column: span 6;
  }
`;
export const YX1Earphone = styled.div`
  min-height: 320px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  grid-column: 1;
  grid-row: span 1;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-column: span 6;
    padding: 4rem;
  }
`;

export const ZX9Heading = styled(HeadingOne)`
  color: white;
`;
export const ZX9Paragraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textAlt};
`;
