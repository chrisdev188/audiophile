import * as React from "react";
import { ResponsiveImage } from "../../../components";
import { Container, MaxWidthContainer } from "../../../globalStyles";
import { ProductType } from "../../../globalTypes";
import { StyledProductGallery } from "./styles";

interface ProductImageGalleryProps {
  product: ProductType;
}

const ProductImageGallery: React.FunctionComponent<
  ProductImageGalleryProps
> = ({ product }) => {
  return (
    <Container>
      <MaxWidthContainer>
        <StyledProductGallery>
          <div className="top">
            <ResponsiveImage
              name=""
              mobileSrc={product.gallery.first.mobile}
              tabletSrc={product.gallery.first.tablet}
              desktopSrc={product.gallery.first.desktop}
            />
          </div>
          <div className="middle">
            <ResponsiveImage
              name=""
              mobileSrc={product.gallery.second.mobile}
              tabletSrc={product.gallery.second.tablet}
              desktopSrc={product.gallery.second.desktop}
            />
          </div>
          <div className="bottom">
            <ResponsiveImage
              name=""
              mobileSrc={product.gallery.third.mobile}
              tabletSrc={product.gallery.third.tablet}
              desktopSrc={product.gallery.third.desktop}
            />
          </div>
        </StyledProductGallery>
      </MaxWidthContainer>
    </Container>
  );
};

export default ProductImageGallery;
