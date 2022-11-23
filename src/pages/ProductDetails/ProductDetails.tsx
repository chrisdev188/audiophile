import { useParams } from "react-router-dom";
import { About, ProductCategoryList } from "../../components";
import { StyledProductDetails } from "./styles";
import { ProductDetailsProps } from "./types";

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  productList,
}) => {
  const { productSlug } = useParams();
  const product = productList.find((product) => product.slug === productSlug);
  return (
    <StyledProductDetails>
      <div className="product-amount"></div>
      <div className="product-features"></div>
      <div className="in-the-box"></div>
      <div className="photo-gallery"></div>
      <div className="also-like"></div>
      <ProductCategoryList />
      <About />
    </StyledProductDetails>
  );
};

export default ProductDetails;
