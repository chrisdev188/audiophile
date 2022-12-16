import { useRef } from "react";
import { Container } from "../../components";
import { useClickOutside } from "../../hooks";
import { StyledCheckout } from "./Checkout.styles";
import CheckoutForm from "./CheckoutForm";
import CheckoutSection from "./CheckoutSection";
import ConfirmCheckoutModal from "./ConfirmCheckoutModal";
import SummarySection from "./SummarySection";
import useCheckoutFormLogic from "./useCheckoutFormLogic";

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

const Checkout = () => {
  const { closeConfirmCheckoutModal, showConfirmCheckoutModal } =
    useCheckoutFormLogic();

  // handle click outside confirmation checkout modal
  const ConfirmCheckoutModalRef = useRef(null);
  useClickOutside(ConfirmCheckoutModalRef, closeConfirmCheckoutModal);

  return (
    <>
      {showConfirmCheckoutModal && (
        <ConfirmCheckoutModal refObject={ConfirmCheckoutModalRef} />
      )}
      <StyledCheckout>
        <Container style={{ paddingBlock: "7rem" }}>
          <CheckoutForm left={<CheckoutSection />} right={<SummarySection />} />
        </Container>
      </StyledCheckout>
    </>
  );
};

export default Checkout;
