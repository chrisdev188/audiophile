import * as React from "react";
import { MaxWidthContainer } from "../../styles";
import { StyledProductFeatures } from "./styles";

interface ProductFeaturesProps {}

const ProductFeatures: React.FunctionComponent<ProductFeaturesProps> = (
  props
) => {
  return (
    <StyledProductFeatures>
      <MaxWidthContainer>product features</MaxWidthContainer>
    </StyledProductFeatures>
  );
};

export default ProductFeatures;
