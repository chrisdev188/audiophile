import * as React from "react";
import { MaxWidthContainer } from "../../styles";
import { StyledProductGallery } from "./styles";

interface ProductImageGalleryProps {}

const ProductImageGallery: React.FunctionComponent<ProductImageGalleryProps> = (
  props
) => {
  return (
    <StyledProductGallery>
      <MaxWidthContainer>gallery</MaxWidthContainer>
    </StyledProductGallery>
  );
};

export default ProductImageGallery;
