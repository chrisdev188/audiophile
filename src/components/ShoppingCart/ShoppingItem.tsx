import {
  IDetailCartItem,
  useShoppingCartContext,
} from "../../context/ShoppingCartContext";
import { useCounter } from "../../hooks";
import Counter from "../Counter/Counter";
import Flex from "../Flex/Flex";
import Money from "../Money/Money";
import {
  ItemQuantity,
  ShoppingItemName,
  ShoppingItemThumbnail,
  ShoppingItemWrapper,
} from "./ShoppingItem.styles";

interface IShoppingItemProps {
  item: IDetailCartItem;
  withCounter?: boolean;
}

const ShoppingItem: React.FC<IShoppingItemProps> = ({ item, withCounter }) => {
  const { increaseItemQuantity, decreaseItemQuantity } =
    useShoppingCartContext();
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
          <ShoppingItemThumbnail>
            <img src={item.image} alt={item.name} />
          </ShoppingItemThumbnail>
          <Flex xs={{ direction: "column", gap: 0.5 }}>
            <ShoppingItemName>{item.name}</ShoppingItemName>
            <Money number={item.price} textDarkAlt small />
          </Flex>
        </Flex>
        {withCounter ? (
          <Counter
            start={item.quantity}
            handleIncrease={(e) => {
              e.stopPropagation();
              increaseItemQuantity(item.id, 1);
            }}
            handleDecrease={(e) => {
              e.stopPropagation();
              decreaseItemQuantity(item.id);
            }}
          />
        ) : (
          <ItemQuantity>x{item.quantity}</ItemQuantity>
        )}
      </Flex>
    </ShoppingItemWrapper>
  );
};

export default ShoppingItem;
