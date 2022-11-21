import { Button } from "../../components";
import {
  HeadingFour,
  MaxWidthContainer,
  TwelveColumnsGrid,
} from "../../styles";
import zx9SpeakerMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import zx9SpeakerTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import zx9SpeakerDesktop from "../../assets/home/desktop/image-speaker-zx9.png";
import zx7SpeakerMobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import zx7SpeakerTablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import zx7SpeakerDesktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import YX1Mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import YX1Tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import YX1Desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";

import {
  ZX9Speaker,
  ZX9Content,
  ZX7Speaker,
  YX1EarphoneImg,
  YX1Earphone,
  ZX9Heading,
  ZX9Paragraph,
  StyledHomeProductGallery,
} from "./styles";

interface HomeProductGalleryProps {}

const HomeProductGallery: React.FunctionComponent<HomeProductGalleryProps> = (
  props
) => {
  return (
    <StyledHomeProductGallery>
      <MaxWidthContainer>
        <TwelveColumnsGrid>
          <ZX9Speaker>
            <ZX9Content>
              <picture>
                <source srcSet={zx9SpeakerDesktop} media="(min-width:1140px)" />
                <source srcSet={zx9SpeakerTablet} media="(min-width:768px)" />
                <img src={zx9SpeakerMobile} alt="ZX9 speaker" />
              </picture>
              <ZX9Heading as="h3">ZX9 SPEAKER</ZX9Heading>
              <ZX9Paragraph>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </ZX9Paragraph>
              <Button variant="filled" inverted>
                see product
              </Button>
            </ZX9Content>
          </ZX9Speaker>
          <ZX7Speaker>
            <picture>
              <source srcSet={zx7SpeakerDesktop} media="(min-width:900px)" />
              <source srcSet={zx7SpeakerTablet} media="(min-width:768px)" />
              <img src={zx7SpeakerMobile} alt="ZX9 speaker" />
            </picture>
            <div className="content">
              <HeadingFour as="h3">ZX7 SPEAKER</HeadingFour>
              <Button variant="outlined" inverted>
                see product
              </Button>
            </div>
          </ZX7Speaker>
          <YX1EarphoneImg>
            <picture>
              <source srcSet={YX1Desktop} media="(min-width:1140px)" />
              <source srcSet={YX1Tablet} media="(min-width:768px)" />
              <img src={YX1Mobile} alt="YX1 Earphones" />
            </picture>
          </YX1EarphoneImg>
          <YX1Earphone>
            <HeadingFour as="h3">YX1 Earphones</HeadingFour>
            <Button variant="outlined" inverted>
              see product
            </Button>
          </YX1Earphone>
        </TwelveColumnsGrid>
      </MaxWidthContainer>
    </StyledHomeProductGallery>
  );
};

export default HomeProductGallery;
