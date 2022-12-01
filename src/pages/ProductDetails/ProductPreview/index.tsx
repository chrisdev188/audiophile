import { useEffect, useRef } from "react";
import { Button, Counter, ResponsiveImage } from "../../../components";
import {
  Container,
  HeadingLG,
  HeadingXS,
  MaxWidthContainer,
  Paragraph,
} from "../../../globalStyles";
import { CartItemType, ProductType } from "../../../globalTypes";
import { useCounterCrement } from "../../../hooks";
import { PreviewOverline, StyledProductPreview } from "./styles";

interface ProductPreviewProps {
  product: ProductType;
  handleAddItemToShoppingList: (newItem: CartItemType) => void;
}

const getImageUrl = (path: string) => {
  return new URL(`../../../${path}`, import.meta.url).href;
};

const ProductPreview: React.FC<ProductPreviewProps> = ({
  product,
  handleAddItemToShoppingList,
}) => {
  const [quantity, handleIncreaseQuantity, handleDecreaseQuantity] =
    useCounterCrement(1);

  const cartItem = useRef<CartItemType | null>(null);
  useEffect(() => {
    cartItem.current = {
      ...product,
      deleted: false,
      quantity: quantity as number,
    };
  }, [quantity]);

  return (
    <Container as="section">
      <MaxWidthContainer>
        <StyledProductPreview>
          <div className="image-container">
            <ResponsiveImage
              name={product.name}
              mobileSrc={getImageUrl(product.image.mobile)}
              tabletSrc={getImageUrl(product.image.tablet)}
              desktopSrc={getImageUrl(product.image.desktop)}
            />
          </div>
          <div className="content">
            <PreviewOverline>new product</PreviewOverline>
            <HeadingLG>{product.name}</HeadingLG>
            <Paragraph>{product.description}</Paragraph>
            <HeadingXS>${product.price}</HeadingXS>
            <div className="actions">
              <Counter
                number={quantity as number}
                handleIncrease={handleIncreaseQuantity as () => void}
                handleDecrease={handleDecreaseQuantity as () => void}
              />
              <Button
                variant="filled"
                onClick={() =>
                  handleAddItemToShoppingList(cartItem.current as CartItemType)
                }
              >
                add to cart
              </Button>
            </div>
          </div>
        </StyledProductPreview>
      </MaxWidthContainer>
    </Container>
  );
};

export default ProductPreview;
