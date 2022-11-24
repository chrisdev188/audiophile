import { useParams } from "react-router-dom";
import { About, ProductCategoryList } from "../../components";
import { Main } from "../../styles";
import { ProductDetailsMain } from "./styles";
import { ProductDetailsProps } from "./types";

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  productList,
}) => {
  const { productSlug } = useParams();
  const product = productList.find((product) => product.slug === productSlug);
  return (
    <>
      <ProductDetailsMain>
        <ProductCategoryList />
        <About />
      </ProductDetailsMain>
    </>
  );
};

export default ProductDetails;
