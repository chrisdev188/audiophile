import {
  Container,
  Flex,
  FormInput,
  Grid,
  Money,
  RadioInput,
  Typography,
} from "../../components";
import CashIcon from "../../components/icons/CashIcon";
import { CartMoneyLabel } from "../../components/ShoppingCart/ShoppingCartModal.styles";
import ShoppingList from "../../components/ShoppingCart/ShoppingList";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import usdCurrencyFormatter from "../../helpers/usdCurrencyFormatter";
import {
  CheckoutButton,
  CheckoutSection,
  StyledCheckout,
  SummarySection,
} from "./Checkout.styles";
import useCheckoutFormLogic from "./useCheckoutFormLogic";

interface ICheckoutProps {}
export type Input = {
  value: string;
  errorMessage?: string;
  invalid?: boolean;
};
export interface FormObject {
  name: Input;
  email: Input;
  phone: Input;
  address: Input;
  zipcode: Input;
  city: Input;
  country: Input;
  paymentOption: Input;
  eMoney: Input;
  cash: Input;
}

const Checkout: React.FunctionComponent<ICheckoutProps> = (props) => {
  const {
    formObject,
    handleSubmit,
    handleChange,
    billingInfo,
    shippingInfo,
    paymentOptions,
    paymentInfo,
  } = useCheckoutFormLogic({
    name: { value: "", errorMessage: "", invalid: false },
    email: { value: "", errorMessage: "", invalid: false },
    phone: { value: "", errorMessage: "", invalid: false },
    address: { value: "", errorMessage: "", invalid: false },
    zipcode: { value: "", errorMessage: "", invalid: false },
    city: { value: "", errorMessage: "", invalid: false },
    country: { value: "", errorMessage: "", invalid: false },
    eMoney: { value: "", errorMessage: "", invalid: false },
    cash: { value: "", errorMessage: "", invalid: false },
    paymentOption: { value: "e-money" },
  });

  const { fullDetailsCart } = useShoppingCartContext();
  const total = fullDetailsCart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shipping = 50;
  const vat = total * 0.2;
  let grandTotal = 0;
  if (total > 0) {
    grandTotal = total + shipping + vat;
  } else {
    grandTotal = 0;
  }

  return (
    <StyledCheckout>
      <Container className="container">
        <form onSubmit={handleSubmit}>
          <Grid>
            <CheckoutSection>
              <Typography
                component="h2"
                variant="h3"
                style={{ marginBottom: "3rem" }}
              >
                checkout
              </Typography>
              <div className="fieldset-container">
                {/*************************** billing info ***************************/}

                <fieldset className="billing">
                  <Typography
                    component="legend"
                    variant="subtitle"
                    textColor="accent"
                  >
                    Billing Details
                  </Typography>
                  <div className="field-grid">
                    {billingInfo.map((info) => (
                      <FormInput
                        key={info.id}
                        {...info}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </fieldset>

                {/*************************** shipping info ***************************/}

                <fieldset className="shipping">
                  <Typography
                    component="legend"
                    variant="subtitle"
                    textColor="accent"
                  >
                    Shipping Info
                  </Typography>
                  <div className="field-grid">
                    {shippingInfo.map((info) => (
                      <FormInput
                        key={info.id}
                        {...info}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </fieldset>

                {/*************************** payment info ***************************/}

                <fieldset className="payment">
                  <Typography
                    component="legend"
                    variant="subtitle"
                    textColor="accent"
                  >
                    Payment Details
                  </Typography>
                  <div className="field-grid">
                    <div className="payment-methods">
                      <h4 className="payment-heading">Payment methods</h4>
                      <div className="inputs">
                        {paymentOptions.map((option) => (
                          <RadioInput
                            key={option.id}
                            {...option}
                            onChange={handleChange}
                          />
                        ))}
                      </div>
                    </div>
                    {formObject.paymentOption.value === "e-money" && (
                      <>
                        {paymentInfo.map((info) => (
                          <FormInput
                            key={info.id}
                            {...info}
                            onChange={handleChange}
                          />
                        ))}
                      </>
                    )}
                    {formObject.paymentOption.value === "cash" && (
                      <Flex
                        xs={{ gap: 1, direction: "column", items: "center" }}
                        sm={{ gap: 3, direction: "row", items: "center" }}
                        className="cash-content"
                      >
                        <span>
                          <CashIcon />
                        </span>
                        <Typography textColor="darkAlt">
                          The ‘Cash on Delivery’ option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </Typography>
                      </Flex>
                    )}
                  </div>
                </fieldset>
              </div>
            </CheckoutSection>
            <SummarySection>
              <Typography component="h3" variant="h6">
                summary
              </Typography>

              {fullDetailsCart.length > 0 && (
                <ShoppingList list={fullDetailsCart} />
              )}

              <Flex xs={{ direction: "column", gap: 0.5 }}>
                <Flex xs={{ content: "space-between", items: "center" }}>
                  <CartMoneyLabel>total</CartMoneyLabel>
                  <Money number={total} />
                </Flex>
                <Flex xs={{ content: "space-between", items: "center" }}>
                  <CartMoneyLabel>shipping</CartMoneyLabel>
                  <Money number={shipping} />
                </Flex>
                <Flex xs={{ content: "space-between", items: "center" }}>
                  <CartMoneyLabel>vat (included)</CartMoneyLabel>
                  <Money number={vat} />
                </Flex>
              </Flex>

              <Flex xs={{ content: "space-between", items: "center" }}>
                <CartMoneyLabel>GRAND TOTAL</CartMoneyLabel>
                <Money
                  number={grandTotal}
                  style={{ color: "var(--clr-txt-accent)" }}
                />
              </Flex>

              <CheckoutButton
                type="submit"
                color="secondary"
                disabled={total > 0 ? false : true}
              >
                checkout
              </CheckoutButton>
            </SummarySection>
          </Grid>
        </form>
      </Container>
    </StyledCheckout>
  );
};

export default Checkout;
