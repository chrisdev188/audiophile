import { Link } from "react-router-dom";
import { HeadingMD } from "../../../globalStyles";
import { ProductType } from "../../../globalTypes";
import ResponsiveImage from "../../../components/UI/ResponsiveImage";
import Button from "../../../components/UI/Button/Button";
import { StyledDescription, StyledOverline, StyledProductItem } from "./styles";

interface ProductItemProps {
  product: ProductType;
  left: Boolean;
}

const getImageUrl = (path: string) => {
  return new URL(`../../../${path}`, import.meta.url).href;
};

const ProductItem: React.FunctionComponent<ProductItemProps> = ({
  product,
  left,
}) => {
  return (
    <StyledProductItem as="article">
      <div className={`img-container ${left ? "odds" : ""}`}>
        <ResponsiveImage
          name={product.name}
          mobileSrc={getImageUrl(product.categoryImage.mobile)}
          tabletSrc={getImageUrl(product.categoryImage.tablet)}
          desktopSrc={getImageUrl(product.categoryImage.desktop)}
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
