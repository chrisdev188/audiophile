import { Button, ResponsiveImage } from "../../../components";
import {
  Container,
  HeadingMD,
  MaxWidthContainer,
  TwelveColumnsGrid,
} from "../../../globalStyles";

import {
  ZX9Speaker,
  ZX9Content,
  ZX7Speaker,
  YX1EarphoneImg,
  YX1Earphone,
  ZX9Heading,
  ZX9Paragraph,
} from "./styles";
import { Link } from "react-router-dom";

interface HomeProductGalleryProps {}

const HomeProductGallery: React.FunctionComponent<HomeProductGalleryProps> = (
  props
) => {
  return (
    <Container as="section">
      <MaxWidthContainer>
        <TwelveColumnsGrid>
          <ZX9Speaker>
            <ZX9Content>
              <ResponsiveImage
                name="ZX9 Speaker"
                mobileSrc="/assets/home/mobile/image-speaker-zx9.png"
                tabletSrc="/assets/home/tablet/image-speaker-zx9.png"
                desktopSrc="/assets/home/desktop/image-speaker-zx9.png"
              />
              <ZX9Heading as="h3">ZX9 SPEAKER</ZX9Heading>
              <ZX9Paragraph>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </ZX9Paragraph>
              <Link to="/speakers/zx9-speaker">
                <Button variant="filled" inverted>
                  see product
                </Button>
              </Link>
            </ZX9Content>
          </ZX9Speaker>
          <ZX7Speaker>
            <picture>
              <source
                srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
                media="(min-width:1140px)"
              />
              <source
                srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
                media="(min-width:768px)"
              />
              <img
                src="/assets/home/mobile/image-speaker-zx7.jpg"
                alt="ZX7 speaker"
              />
            </picture>
            <div className="content">
              <HeadingMD as="h3">ZX7 SPEAKER</HeadingMD>
              <Link to="/speakers/zx7-speaker">
                <Button variant="outlined" inverted>
                  see product
                </Button>
              </Link>
            </div>
          </ZX7Speaker>
          <YX1EarphoneImg>
            <picture>
              <source
                srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
                media="(min-width:1140px)"
              />
              <source
                srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
                media="(min-width:768px)"
              />
              <img
                src="/assets/home/mobile/image-earphones-yx1.jpg"
                alt="YX1 Earphones"
              />
            </picture>
          </YX1EarphoneImg>
          <YX1Earphone>
            <HeadingMD as="h3">YX1 Earphones</HeadingMD>
            <Link to="/earphones/yx1-earphones">
              <Button variant="outlined" inverted>
                see product
              </Button>
            </Link>
          </YX1Earphone>
        </TwelveColumnsGrid>
      </MaxWidthContainer>
    </Container>
  );
};

export default HomeProductGallery;
