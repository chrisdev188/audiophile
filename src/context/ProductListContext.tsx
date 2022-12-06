import { createContext, useContext } from "react";
import productList from "../data.json";

export type ProductListType = typeof productList;
export type CategoryType = "headphones" | "earphones" | "speakers";

export const ProductListContext = createContext<ProductListType | null>(null);

export const ProductListProvider: React.FC<{
  children?: React.ReactElement;
}> = (props) => {
  return (
    <ProductListContext.Provider value={productList}>
      {props.children}
    </ProductListContext.Provider>
  );
};

export const useProductList = (): ProductListType => {
  const productList = useContext(ProductListContext);
  return productList as ProductListType;
};
