import {
  Button,
  Container,
  FormInput,
  Grid,
  Typography,
} from "../../components";
import {
  CheckoutSection,
  StyledCheckout,
  SummarySection,
} from "./Checkout.styles";
import useCheckoutFormLogic from "./useCheckoutFormLogic";

interface ICheckoutProps {}
export type Input = {
  value: string;
  errorMessage: string;
  invalid: boolean;
};
export interface FormObject {
  name: Input;
  email: Input;
  phone: Input;
  address: Input;
  zipcode: Input;
  city: Input;
  country: Input;
}

const Checkout: React.FunctionComponent<ICheckoutProps> = (props) => {
  const { handleSubmit, handleChange, billingInfo, shippingInfo } =
    useCheckoutFormLogic();

  return (
    <StyledCheckout>
      <Container className="container">
        <Grid>
          <CheckoutSection>
            <form onSubmit={handleSubmit}>
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
              <Button type="submit" color="secondary">
                Submit
              </Button>
            </form>
          </CheckoutSection>
          <SummarySection>this is summary section</SummarySection>
        </Grid>
      </Container>
    </StyledCheckout>
  );
};

export default Checkout;
