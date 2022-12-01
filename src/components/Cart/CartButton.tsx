import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import CartBadge from "./CartBadge";
import { StyledCartButton } from "./styles";

interface CartButtonProps {
  setShowCartModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartButton: React.FunctionComponent<CartButtonProps> = ({
  setShowCartModal,
}) => {
  return (
    <StyledCartButton
      aria-label="cart"
      onClick={() => setShowCartModal((prevValue) => !prevValue)}
    >
      <img src={cartIcon} alt="" aria-hidden={true} />
      <CartBadge number={1} />
    </StyledCartButton>
  );
};

export default CartButton;
