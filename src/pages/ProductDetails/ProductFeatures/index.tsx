import * as React from "react";
import {
  Container,
  HeadingMD,
  MaxWidthContainer,
  Paragraph,
} from "../../../globalStyles";
import { ProductType } from "../../../globalTypes";
import { StyledProductFeatures } from "./styles";

interface ProductFeaturesProps {
  product: ProductType;
}

const ProductFeatures: React.FunctionComponent<ProductFeaturesProps> = ({
  product,
}) => {
  return (
    <Container>
      <MaxWidthContainer>
        <StyledProductFeatures as="section">
          <div className="features">
            <HeadingMD>Features</HeadingMD>
            <>
              {product.features.split("\n\n").map((p, index) => (
                <Paragraph key={index}>{p}</Paragraph>
              ))}
            </>
          </div>
          <div className="in-the-box">
            <HeadingMD>in the box</HeadingMD>
            <ul>
              {product.includes.map(({ item, quantity }, index) => (
                <li key={index}>
                  <span className="quantity">{quantity}x</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </StyledProductFeatures>
      </MaxWidthContainer>
    </Container>
  );
};

export default ProductFeatures;
