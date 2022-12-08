import { CategoryType, useProductList } from "../../context/ProductListContext";
import Container from "../Container/Container";

interface IProductListByCategoryProps {
  category: CategoryType;
}

const ProductListByCategory: React.FunctionComponent<
  IProductListByCategoryProps
> = (props) => {
  const { category } = props;

  const productList = useProductList();
  const listByCategory = productList.filter(
    (product) => product.category === category
  );

  return (
    <section>
      <Container style={{ backgroundColor: "darksalmon" }}>
        <ul>
          {listByCategory.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProductListByCategory;
