import {
  Button,
  Container,
  Counter,
  Flex,
  Money,
  Toast,
} from "../../components";
import ProductCard from "../../components/ProductCard/ProductCard";
import useToast from "../../components/Toast/useToast";
import { ProductType } from "../../context/ProductListContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import usdCurrencyFormatter from "../../helpers/usdCurrencyFormatter";
import { useCounter } from "../../hooks";

interface IProductPreviewProps {
  product: ProductType;
}

const ProductPreview: React.FunctionComponent<IProductPreviewProps> = ({
  product,
}) => {
  const { count, handleIncrease, handleDecrease, handleReset } = useCounter(1);
  const { increaseItemQuantity } = useShoppingCartContext();
  const { isToastShowing, showToast, toastMessage } = useToast(
    "success",
    "Item added successfully!",
    3000
  );

  const handleAddToCart = () => {
    increaseItemQuantity(product.id, count);
  };

  return (
    <section>
      <Toast message={toastMessage} show={isToastShowing} />
      <Container>
        <ProductCard product={product}>
          <Money number={product.price} />
          <Flex
            xs={{ gap: 1, items: "stretch", content: "center", wrap: "wrap" }}
          >
            <Counter
              start={count}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              notAllowedLessThanOne
            />
            <Button
              color="secondary"
              onClick={() => {
                if (!isToastShowing) {
                  showToast();
                  handleReset();
                  handleAddToCart();
                }
              }}
            >
              add to cart
            </Button>
          </Flex>
        </ProductCard>
      </Container>
    </section>
  );
};

export default ProductPreview;
