import { useRef } from "react";
import { Link } from "react-router-dom";
import { Typography } from "..";
import { useProductListContext } from "../../context/ProductListContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import usdCurrencyFormatter from "../../helpers/usdCurrencyFormatter";
import { useClickOutside } from "../../hooks";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Counter from "../Counter/Counter";
import Flex from "../Flex/Flex";
import { StyledCartModal } from "./ShoppingCartModal.styles";
import ShoppingItem from "./ShoppingItem";

interface IShoppingCartModalProps {
  cartModalRef?: React.RefObject<HTMLDivElement>;
}

const ShoppingCartModal: React.FunctionComponent<IShoppingCartModalProps> = (
  props
) => {
  const {
    fullDetailsCart,
    closeCartModal,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    getNumberOfItems,
  } = useShoppingCartContext();

  const cartModalRef = useRef<HTMLDivElement>(null);

  // handle close modals when click outside
  useClickOutside(cartModalRef, closeCartModal);

  return (
    <StyledCartModal>
      <Container fullVertical className="content-container">
        <Flex xs={{ content: "flex-end" }}>
          <article className="content" ref={cartModalRef}>
            {/******************************* CART HEADER *******************************/}

            <Flex xs={{ content: "space-between" }} className="cart-header">
              <span>Cart ({getNumberOfItems()})</span>
              <button className="remove-btn" onClick={clearCart}>
                remove all
              </button>
            </Flex>

            {/******************************* CART BODY *******************************/}

            {fullDetailsCart.length > 0 ? (
              <Flex
                component="ul"
                xs={{ direction: "column", gap: 1 }}
                sm={{ items: "stretch" }}
              >
                {fullDetailsCart.map((item) => (
                  <li key={item.id}>
                    <ShoppingItem item={item}>
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
                    </ShoppingItem>
                  </li>
                ))}
              </Flex>
            ) : (
              <Typography textColor="darkAlt" style={{ textAlign: "center" }}>
                😅 Sorry, no items added yet!
              </Typography>
            )}

            {/******************************* CART FOOTER *******************************/}

            <Flex xs={{ direction: "column", gap: 2 }} className="cart-footer">
              <Flex xs={{ content: "space-between" }} className="cart-total">
                <div className="total-label">total</div>
                <div className="total-price">
                  {usdCurrencyFormatter.format(
                    fullDetailsCart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )
                  )}
                </div>
              </Flex>
              <Link to="/checkout" onClick={closeCartModal}>
                <Button color="secondary" className="btn-full">
                  checkout
                </Button>
              </Link>
            </Flex>
          </article>
        </Flex>
      </Container>
      <div className="overlay" />
    </StyledCartModal>
  );
};

export default ShoppingCartModal;
