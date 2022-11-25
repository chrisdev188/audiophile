import { MaxWidthContainer } from "../../../styles";
import { ProductListType } from "../../../types";
import ProductItem from "./ProductItem";
import { StyledProductList } from "../styles";

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
                left={index % 2 === 1 ? true : false} // odd indexs will have different styles
              />
            </li>
          ))}
        </ul>
      </MaxWidthContainer>
    </StyledProductList>
  );
};

export default ProductList;
