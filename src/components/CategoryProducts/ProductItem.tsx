import * as React from "react";
import { Link } from "react-router-dom";
import { HeadingFour, Overline, Paragraph } from "../../styles";
import { ProductType } from "../../types";
import Button from "../UI/Button/Button";
import { StyledDescription, StyledOverline, StyledProductItem } from "./styles";

interface ProductItemProps {
  product: ProductType;
  left: Boolean;
}

const getImageUrl = (path: string) => {
  return new URL(`../../${path}`, import.meta.url).href;
};

const ProductItem: React.FunctionComponent<ProductItemProps> = ({
  product,
  left,
}) => {
  return (
    <StyledProductItem as="li">
      <div className={`img-container ${left ? "odds" : ""}`}>
        <picture>
          <source
            srcSet={getImageUrl(product.categoryImage.desktop)}
            media="(min-width: 1140px)"
          />
          <source
            srcSet={getImageUrl(product.categoryImage.tablet)}
            media="(min-width: 768px)"
          />
          <img
            src={getImageUrl(product.categoryImage.mobile)}
            alt={product.name}
          />
        </picture>
      </div>
      <div className={`text ${left ? "odds" : ""}`}>
        {product.new && <StyledOverline>new product</StyledOverline>}
        <HeadingFour>{product.name}</HeadingFour>
        <StyledDescription>{product.description}</StyledDescription>
        <Link to={`/${product.category}/${product.slug}`}>
          <Button variant="filled">see product</Button>
        </Link>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
