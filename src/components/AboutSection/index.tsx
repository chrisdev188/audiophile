import {
  Container,
  HeadingXL,
  MaxWidthContainer,
  Paragraph,
  TwelveColumnsGrid,
} from "../../globalStyles";
// import bestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
// import bestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
// import bestGearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import { AboutImage, AboutText } from "./styles";
import ResponsiveImage from "../ResponsiveImage";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  return (
    <Container as="section">
      <MaxWidthContainer>
        <TwelveColumnsGrid>
          <AboutImage>
            <ResponsiveImage
              name="A man a the headphone"
              mobileSrc="/assets/shared/mobile/image-best-gear.jpg"
              tabletSrc="/assets/shared/tablet/image-best-gear.jpg"
              desktopSrc="/assets/shared/desktop/image-best-gear.jpg"
            />
          </AboutImage>
          <AboutText>
            <HeadingXL as="h3">
              Bringing you the <span>best</span> audio gear
            </HeadingXL>
            <Paragraph>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Paragraph>
          </AboutText>
        </TwelveColumnsGrid>
      </MaxWidthContainer>
    </Container>
  );
};

export default About;
