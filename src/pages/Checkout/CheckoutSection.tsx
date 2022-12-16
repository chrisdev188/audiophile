import { Flex, FormInput, RadioInput, Typography } from "../../components";
import CashIcon from "../../components/icons/CashIcon";
import { CheckoutSectionStyled } from "./Checkout.styles";
import { useCheckoutFormContext } from "./CheckoutFormContext";

const CheckoutSection = () => {
  const {
    formObject,
    billingInfo,
    shippingInfo,
    paymentOptions,
    paymentInfo,
    handleChange,
  } = useCheckoutFormContext();
  return (
    <CheckoutSectionStyled>
      <Typography component="h2" variant="h3" style={{ marginBottom: "3rem" }}>
        checkout
      </Typography>
      <div className="fieldset-container">
        {/*************************** billing info ***************************/}

        <fieldset className="billing">
          <Typography component="legend" variant="subtitle" textColor="accent">
            Billing Details
          </Typography>
          <div className="field-grid">
            {billingInfo &&
              billingInfo.map((info) => (
                <FormInput key={info.id} {...info} onChange={handleChange} />
              ))}
          </div>
        </fieldset>

        {/*************************** shipping info ***************************/}

        <fieldset className="shipping">
          <Typography component="legend" variant="subtitle" textColor="accent">
            Shipping Info
          </Typography>
          <div className="field-grid">
            {shippingInfo &&
              shippingInfo.map((info) => (
                <FormInput key={info.id} {...info} onChange={handleChange} />
              ))}
          </div>
        </fieldset>

        {/*************************** payment info ***************************/}

        <fieldset className="payment">
          <Typography component="legend" variant="subtitle" textColor="accent">
            Payment Details
          </Typography>
          <div className="field-grid">
            <div className="payment-methods">
              <h4 className="payment-heading">Payment methods</h4>
              <div className="inputs">
                {paymentOptions &&
                  paymentOptions.map((option) => (
                    <RadioInput
                      key={option.id}
                      {...option}
                      onChange={handleChange}
                    />
                  ))}
              </div>
            </div>
            {formObject && formObject.paymentOption.value === "e-money" && (
              <>
                {paymentInfo.map((info) => (
                  <FormInput key={info.id} {...info} onChange={handleChange} />
                ))}
              </>
            )}
            {formObject && formObject.paymentOption.value === "cash" && (
              <Flex
                xs={{ gap: 1, direction: "column", items: "center" }}
                sm={{ gap: 3, direction: "row", items: "center" }}
                className="cash-content"
              >
                <span>
                  <CashIcon />
                </span>
                <Typography textColor="darkAlt">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </Typography>
              </Flex>
            )}
          </div>
        </fieldset>
      </div>
    </CheckoutSectionStyled>
  );
};

export default CheckoutSection;
