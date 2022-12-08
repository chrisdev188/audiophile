import { Container } from "../../components";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductType } from "../../context/ProductListContext";

interface IProductPreviewProps {
  product: ProductType;
}

const usCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});

const ProductPreview: React.FunctionComponent<IProductPreviewProps> = ({
  product,
}) => {
  return (
    <section>
      <Container>
        <ProductCard product={product}>
          <div className="price">
            {usCurrencyFormatter.format(product.price)}
          </div>
          <div>+ 1 - Counter here</div>
        </ProductCard>
      </Container>
    </section>
  );
};

export default ProductPreview;
