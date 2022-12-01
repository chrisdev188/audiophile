import { StyledCartBadge } from "../styles";
interface CartBadgeProps {
  number: number;
}

const CartBadge: React.FunctionComponent<CartBadgeProps> = ({ number }) => {
  return <StyledCartBadge>{number}</StyledCartBadge>;
};

export default CartBadge;
