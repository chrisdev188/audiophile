import * as React from "react";
import { Flex, Money, Typography } from "../../components";
import { CartMoneyLabel } from "../../components/ShoppingCart/ShoppingCartModal.styles";
import ShoppingList from "../../components/ShoppingCart/ShoppingList";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { CheckoutButton, SummarySectionStyled } from "./Checkout.styles";

interface ISummarySectionProps {}

const SummarySection: React.FunctionComponent<ISummarySectionProps> = (
  props
) => {
  const { fullDetailsCart, total, shipping, vat, grandTotal } =
    useShoppingCartContext();
  return (
    <SummarySectionStyled>
      <Typography component="h3" variant="h6">
        summary
      </Typography>

      {fullDetailsCart.length > 0 && <ShoppingList list={fullDetailsCart} />}

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
        <Money number={grandTotal} style={{ color: "var(--clr-txt-accent)" }} />
      </Flex>

      <CheckoutButton
        type="submit"
        color="secondary"
        disabled={total > 0 ? false : true}
      >
        checkout
      </CheckoutButton>
    </SummarySectionStyled>
  );
};

export default SummarySection;
