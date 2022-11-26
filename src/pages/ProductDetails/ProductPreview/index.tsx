import { Button, Counter, ResponsiveImage } from "../../../components";
import {
  Container,
  HeadingLG,
  HeadingXS,
  MaxWidthContainer,
  Paragraph,
} from "../../../globalStyles";
import { ProductType } from "../../../globalTypes";
import { PreviewOverline, StyledProductPreview } from "./styles";

interface ProductPreviewProps {
  product: ProductType;
}

const getImageUrl = (path: string) => {
  return new URL(`../../../${path}`, import.meta.url).href;
};

const ProductPreview: React.FunctionComponent<ProductPreviewProps> = ({
  product,
}) => {
  return (
    <Container as="section">
      <MaxWidthContainer>
        <StyledProductPreview>
          <div className="image-container">
            <ResponsiveImage
              name={product.name}
              mobileSrc={getImageUrl(product.image.mobile)}
              tabletSrc={getImageUrl(product.image.tablet)}
              desktopSrc={getImageUrl(product.image.desktop)}
            />
          </div>
          <div className="content">
            <PreviewOverline>NEW PRODUCT</PreviewOverline>
            <HeadingLG>XX99 Mark II Headphones</HeadingLG>
            <Paragraph>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </Paragraph>
            <HeadingXS>${product.price}</HeadingXS>
            <div className="actions">
              <Counter />
              <Button variant="filled">add to cart</Button>
            </div>
          </div>
        </StyledProductPreview>
      </MaxWidthContainer>
    </Container>
  );
};

export default ProductPreview;
