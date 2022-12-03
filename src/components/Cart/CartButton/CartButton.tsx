// import cartIcon from "../../../assets/shared/desktop/icon-cart.svg";
import CartBadge from "../CartBadge/CartBadge";
import { StyledCartButton } from "../styles";

interface CartButtonProps {
  setShowCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  numberOfShoppingItem: number;
}

const CartButton: React.FunctionComponent<CartButtonProps> = ({
  setShowCartModal,
  numberOfShoppingItem,
}) => {
  return (
    <StyledCartButton
      aria-label="cart"
      onClick={() => setShowCartModal((prevValue) => !prevValue)}
    >
      <img
        src="/assets/shared/desktop/icon-cart.svg"
        alt=""
        aria-hidden={true}
      />
      <CartBadge number={numberOfShoppingItem} />
    </StyledCartButton>
  );
};

export default CartButton;
