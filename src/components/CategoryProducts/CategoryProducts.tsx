import { ProductListType } from "../../types";
import About from "../About/About";
import ProductCategoryList from "../ProductCategoryList/ProductCategoryList";
import Header from "./Header";
import ProductList from "./ProductList";

interface CategoryProductsProps {
  list: ProductListType;
  categoryName: "headphones" | "speakers" | "earphones";
}

const CategoryProducts: React.FunctionComponent<CategoryProductsProps> = ({
  list,
  categoryName,
}) => {
  return (
    <div>
      <Header categoryName={categoryName} />
      <ProductList list={list} />
      <ProductCategoryList />
      <About />
    </div>
  );
};

export default CategoryProducts;
