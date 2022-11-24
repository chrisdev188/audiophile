import styled from "styled-components";
import {
  HeadingXXL,
  Paragraph,
  Container,
  MaxWidthContainer,
  Overline,
} from "../../styles";
import circlePatterns from "../../assets/home/desktop/pattern-circles.svg";

export const StyledHero = styled.div`
  height: 85vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5.5rem 1fr;
  @media (min-width: 450px) {
    height: 90vh;
  }
  @media (min-width: 768px) {
    height: 95vh;
  }
`;

export const HeroImageContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroContentContainer = styled(Container)`
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 2 / span 1;
`;
export const HeroContentWrapper = styled(MaxWidthContainer)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: start;
    align-items: center;
  }
`;
export const HeroText = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    align-items: start;
    text-align: left;
  }
`;
export const HeroHeading = styled(HeadingXXL)`
  color: white;
`;
export const HeroParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textAlt};
  margin-bottom: 1rem;
  max-width: 22rem;
`;
export const HeroOverline = styled(Overline)`
  color: ${({ theme }) => theme.colors.textAlt};
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
    img {
      width: 25rem;
      margin-bottom: 0;
      position: absolute;
      left: 100px;
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

export const ZX9Heading = styled(HeadingXXL)`
  color: white;
`;
export const ZX9Paragraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textAlt};
`;
