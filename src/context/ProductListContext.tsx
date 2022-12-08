import { createContext, useContext } from "react";
import productList from "../data.json";

export type ProductListType = typeof productList;
export type OtherProducts = typeof productList[0]["others"];
export type ProductGalleryType = typeof productList[0]["gallery"];
export type ProductFeaturesType = typeof productList[0]["features"];
export type IncludesType = typeof productList[0]["includes"];
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
