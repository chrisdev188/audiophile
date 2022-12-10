import { ProductType } from "../../context/ProductListContext";

export interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  product: ProductType;
  children: React.ReactNode;
}
