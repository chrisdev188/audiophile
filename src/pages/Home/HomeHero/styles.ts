import styled from "styled-components";
import {
  Container,
  HeadingXXL,
  MaxWidthContainer,
  Overline,
  Paragraph,
} from "../../../globalStyles";

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
  color: ${({ theme }) => theme.palette.text.primary.alternate};
  margin-bottom: 1rem;
  max-width: 22rem;
`;
export const HeroOverline = styled(Overline)`
  color: ${({ theme }) => theme.palette.text.primary.alternate};
`;
