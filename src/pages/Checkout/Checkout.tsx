import { Container, Grid } from "../../components";
import { StyledCheckout } from "./Checkout.styles";

interface ICheckoutProps {}

const Checkout: React.FunctionComponent<ICheckoutProps> = (props) => {
  return (
    <StyledCheckout>
      <Container>
        <Grid>
          <div className="checkout">This is checkout section</div>
          <div className="summary">this is summary section</div>
        </Grid>
      </Container>
    </StyledCheckout>
  );
};

export default Checkout;
