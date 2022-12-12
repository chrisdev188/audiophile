import { Button, Container, Counter, Flex } from "../../components";
import ProductCard from "../../components/ProductCard/ProductCard";
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
  const { count, handleIncrease, handleDecrease } = useCounter(1);
  const { increaseItemQuantity } = useShoppingCartContext();

  const handleAddToCart = () => {
    increaseItemQuantity(product.id, count);
  };

  return (
    <section>
      <Container>
        <ProductCard product={product}>
          <div className="price">
            {usdCurrencyFormatter.format(product.price)}
          </div>
          <Flex
            xs={{ gap: 1, items: "center", content: "center", wrap: "wrap" }}
          >
            <Counter
              start={count}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
            <Button color="secondary" onClick={handleAddToCart}>
              add to cart
            </Button>
          </Flex>
        </ProductCard>
      </Container>
    </section>
  );
};

export default ProductPreview;
