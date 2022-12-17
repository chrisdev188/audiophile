import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Flex, Money, Typography } from "../../components";
import ConfirmCheckoutIcon from "../../components/icons/ConfirmCheckoutIcon";
import ShoppingItem from "../../components/ShoppingCart/ShoppingItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

interface IConfirmCheckoutModalProps extends React.HTMLAttributes<HTMLElement> {
  refObject?: React.RefObject<HTMLDivElement>;
}

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1300;
  display: grid;
  place-items: center;
  padding: 1.5rem;
`;

const Modal = styled.div`
  max-width: 30rem;
  width: 100%;
  background-color: white;
  padding: 2rem 1.5rem;
  border-radius: var(--round-md);
  & > * + * {
    margin-top: 2rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ModalContent = styled.div`
  display: grid;
  border-radius: var(--round-md);
  overflow: hidden;
`;

const ModalAction = styled.div``;

const ConfirmCheckoutModal: React.FunctionComponent<
  IConfirmCheckoutModalProps
> = (props) => {
  const { fullDetailsCart, grandTotal, clearCart } = useShoppingCartContext();
  const firstCartItem = fullDetailsCart[0];

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <span>
            <ConfirmCheckoutIcon />
          </span>
          <Typography
            component="span"
            variant="h4"
            style={{ maxWidth: "18rem" }}
          >
            THANK YOU FOR YOUR ORDER
          </Typography>
          <Typography textColor="darkAlt">
            You will receive an email confirmation shortly.
          </Typography>
        </ModalHeader>
        <ModalContent>
          <Flex
            xs={{ direction: "column", gap: 1 }}
            style={{
              backgroundColor: "var(--clr-card)",
              padding: "1rem",
            }}
          >
            <ShoppingItem item={firstCartItem} />
            {fullDetailsCart.length > 1 && (
              <>
                <hr />
                <Typography textColor="darkAlt" style={{ textAlign: "center" }}>
                  and {fullDetailsCart.length - 1} other item(s)
                </Typography>
              </>
            )}
          </Flex>

          <Flex
            style={{ backgroundColor: "var(--clr-primary)", padding: "1rem" }}
            xs={{ direction: "column", gap: 1 }}
          >
            <Typography
              component="span"
              variant="h6"
              textColor="lightAlt"
              style={{ fontWeight: "lighter" }}
            >
              grand total
            </Typography>
            <Typography textColor="light" component="span">
              <Money style={{ color: "inherit" }} number={grandTotal} />
            </Typography>
          </Flex>
        </ModalContent>
        <ModalAction>
          <Button
            as={Link}
            to="/"
            color="secondary"
            style={{ justifyContent: "center" }}
            onClick={clearCart}
          >
            back to home
          </Button>
        </ModalAction>
      </Modal>
    </ModalOverlay>
  );
};

export default ConfirmCheckoutModal;
