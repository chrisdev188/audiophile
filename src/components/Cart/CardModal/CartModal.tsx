import { CartItemType, CartListType } from "../../../globalTypes";
import CartItem from "../CartItem/CartItem";
import { StyledCartModal, CartModalMaxWidthContainer } from "../styles";
interface CartModalProps {
  handleUpdateCartItemQuantity: (newItem: CartItemType) => void;
  handleRemoveItemFromShoppingList: () => void;
  shoppingCartList: CartListType;
}

const CartModal: React.FunctionComponent<CartModalProps> = ({
  handleUpdateCartItemQuantity,
  handleRemoveItemFromShoppingList,
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
                    handleRemoveItemFromShoppingList={
                      handleRemoveItemFromShoppingList
                    }
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
