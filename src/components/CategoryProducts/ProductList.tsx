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
    <Container>
      <MaxWidthContainer>
        <StyledProductList as="ul">
          {list.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              left={index % 2 === 1 ? true : false}
            />
          ))}
        </StyledProductList>
      </MaxWidthContainer>
    </Container>
  );
};

export default ProductList;
