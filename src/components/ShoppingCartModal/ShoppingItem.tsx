import * as React from "react";
import { IDetailCartItem } from "../../context/ShoppingCartContext";
import usdCurrencyFormatter from "../../helpers/usdCurrencyFormatter";
import Flex from "../Flex/Flex";
import { ShoppingItemWrapper } from "./ShoppingCartModal.styles";

interface IShoppingItemProps {
  item: IDetailCartItem;
  children?: React.ReactNode;
}

const ShoppingItem: React.FunctionComponent<IShoppingItemProps> = ({
  item,
  children,
}) => {
  return (
    <ShoppingItemWrapper>
      <Flex
        xs={{
          direction: "row",
          content: "space-between",
          items: "center",
          gap: 1,
        }}
      >
        <Flex xs={{ items: "center", gap: 1 }}>
          <div className="thumbnail">
            <img src={item.image} alt={item.name} />
          </div>
          <Flex xs={{ direction: "column", gap: 0.5 }}>
            <p>{item.name}</p>
            <p>{usdCurrencyFormatter.format(item.price)}</p>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </ShoppingItemWrapper>
  );
};

export default ShoppingItem;
