import { CartItemType, ProductListType } from "../../globalTypes";

export interface ProductDetailsProps {
  productList: ProductListType;
  handleAddItemToShoppingList: (newItem: CartItemType) => void;
}
