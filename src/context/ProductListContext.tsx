import { createContext, useContext, useState } from "react";
import data from "../data.json";

export type ProductListType = typeof data;
export type ProductType = typeof data[0];
export type OtherProducts = typeof data[0]["others"];
export type ProductGalleryType = typeof data[0]["gallery"];
export type ProductFeaturesType = typeof data[0]["features"];
export type IncludesType = typeof data[0]["includes"];
export type CategoryType = "headphones" | "earphones" | "speakers";
type ProductListContext = {
  getProductList: () => ProductListType;
};
type ProductListProviderProps = {
  children: React.ReactNode;
};

export const ProductListContext = createContext({} as ProductListContext);

export const ProductListProvider: React.FC<ProductListProviderProps> = (
  props
) => {
  const [productList] = useState(data);
  const getProductList = () => productList;
  return (
    <ProductListContext.Provider value={{ getProductList }}>
      {props.children}
    </ProductListContext.Provider>
  );
};

export const useProductList = () => {
  return useContext(ProductListContext);
};
