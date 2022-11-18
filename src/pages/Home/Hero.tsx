import styled from "styled-components";
import homeHeroMobile from "../../assets/home/mobile/image-header.jpg";
import homeHeroTablet from "../../assets/home/tablet/image-header.jpg";
import homeHeroDesktop from "../../assets/home/desktop/image-hero.jpg";
import { Button } from "../../components";
import { HeadingOne, Overline, Paragraph } from "../../globalStyles";

const StyledHero = styled.div`
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

const ImageContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 2 / span 1;
  @media (min-width: 768px) {
    padding-inline: 2.5rem;
  }
`;
const ContentWrapper = styled.div`
  max-width: 1140px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: start;
    align-items: center;
  }
`;
const Content = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: 1rem;
  gap: 1.5rem;
  @media (min-width: 768px) {
    align-items: start;
    text-align: left;
    padding-inline: 0;
  }
`;
const Heading = styled(HeadingOne)`
  color: white;
`;
const HeroParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textAlt};
  margin-bottom: 1rem;
  max-width: 22rem;
`;
const HeroOverline = styled(Overline)`
  color: ${({ theme }) => theme.colors.textAlt};
`;

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = (props) => {
  return (
    <StyledHero>
      <ImageContainer>
        <picture>
          <source srcSet={homeHeroDesktop} media="(min-width:768px)" />
          <source srcSet={homeHeroTablet} media="(min-width:450px)" />
          <img src={homeHeroMobile} alt="XX99 Mark II Headphones" />
        </picture>
      </ImageContainer>
      <ContentContainer>
        <ContentWrapper>
          <Content>
            <HeroOverline>new product</HeroOverline>
            <Heading>XX99 Mark II HeadphoneS</Heading>
            <HeroParagraph>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </HeroParagraph>
            <Button variant="filled">see product</Button>
          </Content>
        </ContentWrapper>
      </ContentContainer>
    </StyledHero>
  );
};

export default Hero;
