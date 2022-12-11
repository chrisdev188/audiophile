import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, Typography } from "..";
import { CategoryType, useProductList } from "../../context/ProductListContext";
import media from "../../helpers/styles/mediaQueries";
import Container from "../Container/Container";
import ProductCard from "../ProductCard/ProductCard";

interface IProductListByCategoryProps {
  category: CategoryType;
}

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  img {
    width: 100%;
  }
`;

const ProductListByCategory: React.FunctionComponent<
  IProductListByCategoryProps
> = (props) => {
  const { category } = props;
  const { getProductList } = useProductList();
  const listByCategory = getProductList().filter(
    (product) => product.category === category
  );
  // sort product by property new, if new === true, product will be on the top
  const sortedProductListByNew = listByCategory.sort((a, b) => +b.new - +a.new);

  return (
    <section>
      <Container>
        <ProductList>
          {sortedProductListByNew.map((product, index) => (
            <li key={product.id}>
              {/** if index is odd number, give card different styles */}
              <ProductCard
                product={product}
                className={`${index % 2 === 1 && "odds"}`}
              >
                <Link to={`/${category}/${product.slug}`}>
                  <Button color="secondary">see product</Button>
                </Link>
              </ProductCard>
            </li>
          ))}
        </ProductList>
      </Container>
    </section>
  );
};

export default ProductListByCategory;
