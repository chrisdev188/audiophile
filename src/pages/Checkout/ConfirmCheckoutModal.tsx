import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Flex, Money, Typography } from "../../components";
import ConfirmCheckoutIcon from "../../components/icons/ConfirmCheckoutIcon";
import ShoppingItem from "../../components/ShoppingCart/ShoppingItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

interface IConfirmCheckoutModalProps extends React.HTMLAttributes<HTMLElement> {
  refObject?: React.RefObject<HTMLDivElement>;
}

const ConfirmCheckoutModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1300;
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .content {
    max-width: 33rem;
    padding: 1.5rem;
    margin: auto;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: var(--round-md);
  }
`;

const ConfirmCheckoutModal: React.FunctionComponent<
  IConfirmCheckoutModalProps
> = (props) => {
  const { fullDetailsCart } = useShoppingCartContext();
  const firstCartItem = fullDetailsCart[0];

  return (
    <ConfirmCheckoutModalStyled>
      <div className="overlay">
        <div className="content" ref={props.refObject}>
          <Container
            style={{
              backgroundColor: "white",
              borderRadius: "var(--round-md)",
              padding: "3rem 1.5rem",
            }}
          >
            <Flex xs={{ direction: "column", gap: 1.5 }}>
              <span>
                <ConfirmCheckoutIcon />
              </span>
              <Typography
                component="h3"
                variant="h3"
                style={{ maxWidth: "18rem" }}
              >
                THANK YOU FOR YOUR ORDER
              </Typography>
              <Typography textColor="darkAlt">
                You will receive an email confirmation shortly.
              </Typography>
              <Flex
                xs={{ direction: "column" }}
                sm={{ direction: "row" }}
                style={{ borderRadius: "var(--round-md)", overflow: "hidden" }}
              >
                <div
                  className="left"
                  style={{
                    backgroundColor: "lightgray",
                    padding: "1rem",
                    flex: 3,
                  }}
                >
                  <ShoppingItem item={firstCartItem} />
                  {fullDetailsCart.length > 1 && (
                    <>
                      <hr style={{ marginBlock: "1rem", color: "lightgray" }} />
                      <Typography
                        style={{ textAlign: "center" }}
                        textColor="darkAlt"
                      >
                        And {fullDetailsCart.length - 1} more items
                      </Typography>
                    </>
                  )}
                </div>
                <div
                  className="right"
                  style={{
                    backgroundColor: "black",
                    padding: "1rem",
                    flex: 2,
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h6"
                    style={{ fontSize: "13px" }}
                  >
                    Grand Total
                  </Typography>
                  <Money number={2000} style={{ color: "white" }} />
                </div>
              </Flex>
              <Button
                as={Link}
                to="/"
                color="secondary"
                style={{ justifyContent: "center", marginTop: "1rem" }}
              >
                back to home
              </Button>
            </Flex>
          </Container>
        </div>
      </div>
    </ConfirmCheckoutModalStyled>
  );
};

export default ConfirmCheckoutModal;
