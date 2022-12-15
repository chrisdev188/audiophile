import * as React from "react";
import { IDetailCartItem } from "../../context/ShoppingCartContext";
import Flex from "../Flex/Flex";
import ShoppingItem from "./ShoppingItem";

interface IShoppingListProps {
  list: IDetailCartItem[];
  itemWithCounter?: boolean;
}

const ShoppingList: React.FunctionComponent<IShoppingListProps> = ({
  list,
  itemWithCounter,
}) => {
  return (
    <Flex
      component="ul"
      xs={{ direction: "column", gap: 2 }}
      sm={{ items: "stretch" }}
    >
      {list.map((item) => (
        <li key={item.id}>
          <ShoppingItem item={item} withCounter={itemWithCounter} />
        </li>
      ))}
    </Flex>
  );
};

export default ShoppingList;
