import { useParams } from "react-router-dom";
import { About, ProductNavigation } from "../../components";
import { ProductType } from "../../globalTypes";
import AlsoLikeProducts from "./AlsoLikeProducts";
import ProductFeatures from "./ProductFeatures";
import ProductImageGallery from "./ProductImageGallery";
import ProductPreview from "./ProductPreview";
import { ProductDetailsMain } from "./styles";
import { ProductDetailsProps } from "./types";

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  productList,
  handleAddItemToShoppingList,
}) => {
  const { productSlug } = useParams();

  const product = productList.find(
    (product) => product.slug === productSlug
  ) as ProductType;

  return (
    <>
      <ProductDetailsMain>
        <ProductPreview
          product={product}
          handleAddItemToShoppingList={handleAddItemToShoppingList}
        />
        <ProductFeatures product={product} />
        <ProductImageGallery product={product} />
        <AlsoLikeProducts productList={productList} others={product.others} />
        <ProductNavigation />
        <About />
      </ProductDetailsMain>
    </>
  );
};

export default ProductDetails;
