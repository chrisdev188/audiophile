import { useParams } from "react-router-dom";
import { About, ProductCategoryList } from "../../components";
import { ProductType } from "../../types";
import AlsoLikeProducts from "./AlsoLikeProducts";
import ProductFeatures from "./ProductFeatures";
import ProductImageGallery from "./ProductImageGallery";
import ProductPreview from "./ProductPreview";
import { ProductDetailsMain } from "./styles";
import { ProductDetailsProps } from "./types";

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  productList,
}) => {
  const { productSlug } = useParams();
  const product = productList.find(
    (product) => product.slug === productSlug
  ) as ProductType;
  return (
    <>
      <ProductDetailsMain>
        <ProductPreview />
        <ProductFeatures />
        <ProductImageGallery product={product} />
        <AlsoLikeProducts productList={productList} others={product.others} />
        <ProductCategoryList />
        <About />
      </ProductDetailsMain>
    </>
  );
};

export default ProductDetails;
