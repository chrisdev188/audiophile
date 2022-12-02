import { useEffect, useRef } from "react";
import { CartItemType } from "../../../globalTypes";
import { useCounter } from "../../../hooks";
import Counter from "../../UI/Counter";
import { StyledCartItem } from "../styles";

interface CartItemProps {
  item: CartItemType;
  handleUpdateCartItemQuantity: (newItem: CartItemType) => void;
  handleRemoveItemFromShoppingList: () => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({
  item,
  handleUpdateCartItemQuantity,
  handleRemoveItemFromShoppingList,
}) => {
  const { count, handleIncrease, handleDecrease } = useCounter(item.quantity);

  const product = useRef<CartItemType | null>(null);
  useEffect(() => {
    product.current = {
      ...item,
      quantity: count,
    };

    handleUpdateCartItemQuantity(product.current);
  }, [count, handleUpdateCartItemQuantity, handleRemoveItemFromShoppingList]);

  useEffect(() => {
    if (count < 1) {
      handleRemoveItemFromShoppingList();
    }
  }, [count]);

  return (
    <StyledCartItem>
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <Counter
        number={count}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        allowDecrement
      />
    </StyledCartItem>
  );
};

export default CartItem;
