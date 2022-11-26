import { Main } from "../../globalStyles";
import { ProductListType } from "../../globalTypes";
import About from "../About";
import ProductCategoryList from "../ProductCategoryList";
import Header from "./Header";
import ProductList from "./ProductList";
import { CategoryProductsProps } from "./types";

const CategoryProducts: React.FunctionComponent<CategoryProductsProps> = ({
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

export default CategoryProducts;
