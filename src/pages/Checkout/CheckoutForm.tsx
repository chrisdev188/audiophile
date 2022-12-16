import * as React from "react";
import { Grid } from "../../components";
import { useCheckoutFormContext } from "./CheckoutFormContext";

interface ICheckoutFormProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const CheckoutForm: React.FunctionComponent<ICheckoutFormProps> = ({
  left,
  right,
}) => {
  const { handleSubmit } = useCheckoutFormContext();
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        {left}
        {right}
      </Grid>
    </form>
  );
};

export default CheckoutForm;
