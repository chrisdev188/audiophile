import { CartItemType, CartListType } from "../../../globalTypes";
import { useCounterCrement } from "../../../hooks";
import Counter from "../../UI/Counter";
import CartItem from "../CartItem/CartItem";
import { StyledCartModal, CartModalMaxWidthContainer } from "../styles";
interface CartModalProps {
  handleUpdateCartItemQuantity: (newItem: CartItemType) => void;
  shoppingCartList: CartListType;
}

const CartModal: React.FunctionComponent<CartModalProps> = ({
  handleUpdateCartItemQuantity,
  shoppingCartList,
}) => {
  return (
    <StyledCartModal>
      <CartModalMaxWidthContainer>
        <div className="content">
          <ul>
            {shoppingCartList.length > 0 ? (
              shoppingCartList.map((item) => (
                <li key={item.name}>
                  <CartItem
                    item={item}
                    handleUpdateCartItemQuantity={handleUpdateCartItemQuantity}
                  />
                </li>
              ))
            ) : (
              <p>There no item in cart</p>
            )}
          </ul>
        </div>
      </CartModalMaxWidthContainer>
    </StyledCartModal>
  );
};

export default CartModal;
