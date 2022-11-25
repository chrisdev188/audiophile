import * as React from "react";
import { ResponsiveImage } from "../../../components";
import { Container, MaxWidthContainer } from "../../../styles";
import { ProductType } from "../../../types";
import { StyledProductGallery } from "../styles";

interface ProductImageGalleryProps {
  product: ProductType;
}

const getImageUrl = (path: string) => {
  return new URL(`../../../${path}`, import.meta.url).href;
};

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
              mobileSrc={getImageUrl(product.gallery.first.mobile)}
              tabletSrc={getImageUrl(product.gallery.first.tablet)}
              desktopSrc={getImageUrl(product.gallery.first.desktop)}
            />
          </div>
          <div className="middle">
            <ResponsiveImage
              name=""
              mobileSrc={getImageUrl(product.gallery.second.mobile)}
              tabletSrc={getImageUrl(product.gallery.second.tablet)}
              desktopSrc={getImageUrl(product.gallery.second.desktop)}
            />
          </div>
          <div className="bottom">
            <ResponsiveImage
              name=""
              mobileSrc={getImageUrl(product.gallery.third.mobile)}
              tabletSrc={getImageUrl(product.gallery.third.tablet)}
              desktopSrc={getImageUrl(product.gallery.third.desktop)}
            />
          </div>
        </StyledProductGallery>
      </MaxWidthContainer>
    </Container>
  );
};

export default ProductImageGallery;
