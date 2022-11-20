import { StyledAbout, ImageContainer, Content } from "./styles";
import {
  HeadingTwo,
  MaxWidthContainer,
  Paragraph,
  TwelveColumnsGrid,
} from "../../globalStyles";
import bestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  return (
    <StyledAbout>
      <MaxWidthContainer>
        <TwelveColumnsGrid>
          <ImageContainer>
            <picture>
              <source srcSet={bestGearDesktop} media="(min-width:1140px)" />
              <source srcSet={bestGearTablet} media="(min-width:768px)" />
              <img src={bestGearMobile} alt="A man a the headphone" />
            </picture>
          </ImageContainer>
          <Content>
            <HeadingTwo as="h3">
              Bringing you the <span>best</span> audio gear
            </HeadingTwo>
            <Paragraph>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Paragraph>
          </Content>
        </TwelveColumnsGrid>
      </MaxWidthContainer>
    </StyledAbout>
  );
};

export default About;
