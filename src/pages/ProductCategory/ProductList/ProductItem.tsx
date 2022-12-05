import { Link } from "react-router-dom";
import { HeadingMD } from "../../../globalStyles";
import { ProductType } from "../../../globalTypes";
import ResponsiveImage from "../../../components/ResponsiveImage";
import Button from "../../../components/Button/Button";
import { StyledDescription, StyledOverline, StyledProductItem } from "./styles";

interface ProductItemProps {
  product: ProductType;
  left: Boolean;
}

const ProductItem: React.FunctionComponent<ProductItemProps> = ({
  product,
  left,
}) => {
  return (
    <StyledProductItem as="article">
      <div className={`img-container ${left ? "odds" : ""}`}>
        <ResponsiveImage
          name={product.name}
          mobileSrc={product.categoryImage.mobile}
          tabletSrc={product.categoryImage.tablet}
          desktopSrc={product.categoryImage.desktop}
        />
      </div>
      <div className={`text ${left ? "odds" : ""}`}>
        {product.new && <StyledOverline>new product</StyledOverline>}
        <HeadingMD>{product.name}</HeadingMD>
        <StyledDescription>{product.description}</StyledDescription>
        <Link to={`/${product.category}/${product.slug}`}>
          <Button variant="filled">see product</Button>
        </Link>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
