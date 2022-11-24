import * as React from "react";
import { Container, MaxWidthContainer } from "../../styles";
import { ProductListType } from "../../types";
import ProductItem from "./ProductItem";
import { StyledProductList } from "./styles";

interface ProductListProps {
  list: ProductListType;
}

const ProductList: React.FunctionComponent<ProductListProps> = ({ list }) => {
  return (
    <StyledProductList as="section">
      <MaxWidthContainer>
        <ul>
          {list.map((product, index) => (
            <li key={product.id}>
              <ProductItem
                product={product}
                left={index % 2 === 1 ? true : false}
              />
            </li>
          ))}
        </ul>
      </MaxWidthContainer>
    </StyledProductList>
  );
};

export default ProductList;
