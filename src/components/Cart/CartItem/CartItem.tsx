import { useEffect, useRef } from "react";
import { CartItemType } from "../../../globalTypes";
import { useCounterCrement } from "../../../hooks";
import Counter from "../../UI/Counter";
import { StyledCartItem } from "../styles";

interface CartItemProps {
  item: CartItemType;
  handleUpdateCartItemQuantity: (newItem: CartItemType) => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({
  item,
  handleUpdateCartItemQuantity,
}) => {
  const [
    quantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleUpdateQuantity,
  ] = useCounterCrement(item.quantity);
  const product = useRef<CartItemType | null>(null);

  useEffect(() => {
    product.current = {
      ...item,
      quantity: quantity as number,
    };
    handleUpdateCartItemQuantity(product.current);
  }, [quantity, handleUpdateCartItemQuantity]);

  return (
    <StyledCartItem>
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <Counter
        number={quantity as number}
        handleIncrease={handleIncreaseQuantity as () => void}
        handleDecrease={handleDecreaseQuantity as () => void}
      />
    </StyledCartItem>
  );
};

export default CartItem;
