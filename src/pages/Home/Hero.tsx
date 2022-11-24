import styled from "styled-components";
import homeHeroMobile from "../../assets/home/mobile/image-header.jpg";
import homeHeroTablet from "../../assets/home/tablet/image-header.jpg";
import homeHeroDesktop from "../../assets/home/desktop/image-hero.jpg";
import { Button } from "../../components";
import {
  HeroContentContainer,
  HeroContentWrapper,
  HeroHeading,
  HeroImageContainer,
  HeroOverline,
  HeroParagraph,
  HeroText,
  StyledHero,
} from "./styles";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = (props) => {
  return (
    <StyledHero as="header">
      <HeroImageContainer>
        <picture>
          <source srcSet={homeHeroDesktop} media="(min-width:768px)" />
          <source srcSet={homeHeroTablet} media="(min-width:450px)" />
          <img src={homeHeroMobile} alt="XX99 Mark II Headphones" />
        </picture>
      </HeroImageContainer>
      <HeroContentContainer>
        <HeroContentWrapper>
          <HeroText>
            <HeroOverline>new product</HeroOverline>
            <HeroHeading>XX99 Mark II HeadphoneS</HeroHeading>
            <HeroParagraph>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </HeroParagraph>
            <Button variant="filled">see product</Button>
          </HeroText>
        </HeroContentWrapper>
      </HeroContentContainer>
    </StyledHero>
  );
};

export default Hero;
