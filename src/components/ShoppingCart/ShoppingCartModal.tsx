import { useRef } from "react";
import { Link } from "react-router-dom";
import { Money, Typography } from "..";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useClickOutside } from "../../hooks";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import {
  CartMoneyLabel,
  CartRemoveAllButton,
  StyledCartModal,
} from "./ShoppingCartModal.styles";
import ShoppingList from "./ShoppingList";

interface IShoppingCartModalProps {
  cartModalRef?: React.RefObject<HTMLDivElement>;
}

const ShoppingCartModal: React.FunctionComponent<IShoppingCartModalProps> = (
  props
) => {
  const { fullDetailsCart, closeCartModal, clearCart, getNumberOfItems } =
    useShoppingCartContext();

  const cartModalRef = useRef<HTMLDivElement>(null);

  // handle close modals when click outside
  useClickOutside(cartModalRef, closeCartModal);

  // calculate total
  const total = fullDetailsCart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <StyledCartModal>
      <Container fullVertical className="content-container">
        <Flex xs={{ content: "flex-end" }}>
          <article className="content" ref={cartModalRef}>
            {/******************************* CART HEADER *******************************/}

            <Flex xs={{ content: "space-between" }} className="cart-header">
              <Typography variant="h6" component="span">
                Cart ({getNumberOfItems()})
              </Typography>

              <CartRemoveAllButton
                onClick={clearCart}
                disabled={fullDetailsCart.length > 0 ? false : true}
              >
                Remove all
              </CartRemoveAllButton>
            </Flex>

            {/******************************* CART BODY *******************************/}

            {fullDetailsCart.length > 0 && (
              <ShoppingList list={fullDetailsCart} itemWithCounter />
            )}

            {/******************************* CART FOOTER *******************************/}

            <Flex xs={{ direction: "column", gap: 2 }}>
              <Flex xs={{ content: "space-between", items: "center" }}>
                <CartMoneyLabel>total</CartMoneyLabel>
                <Money number={total} />
              </Flex>
              {fullDetailsCart.length > 0 && (
                <Button
                  color="secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                  to="/checkout"
                  onClick={closeCartModal}
                  as={Link}
                >
                  checkout
                </Button>
              )}
            </Flex>
          </article>
        </Flex>
      </Container>
      <div className="overlay" />
    </StyledCartModal>
  );
};

export default ShoppingCartModal;
