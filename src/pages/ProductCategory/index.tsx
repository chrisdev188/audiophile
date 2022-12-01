import { Main } from "../../globalStyles";
import About from "../../components/AboutSection";
import ProductCategoryList from "../../components/ProductNavigation";
import Header from "./Header";
import ProductList from "./ProductList";
import { ProductCategoryProps } from "./types";

const ProductCategory: React.FunctionComponent<ProductCategoryProps> = ({
  list,
  categoryName,
}) => {
  return (
    <>
      <Header categoryName={categoryName} />
      <Main>
        <ProductList list={list} />
        <ProductCategoryList />
        <About />
      </Main>
    </>
  );
};

export default ProductCategory;
