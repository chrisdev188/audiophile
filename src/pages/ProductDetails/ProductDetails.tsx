import { useParams } from "react-router-dom";
import styled from "styled-components";
import { About, CategoryCardList, Container, Grid } from "../../components";
import {
  IncludesType,
  OtherProducts,
  ProductFeaturesType,
  ProductGalleryType,
  ProductType,
  useProductList,
} from "../../context/ProductListContext";
import AlsoLikeProducts from "./AlsoLikeProducts";
import Features from "./Features";
import InTheBox from "./InTheBox";
import ProductGallery from "./ProductGallery";
import ProductPreview from "./ProductPreview";

const ProductDetailsMain = styled.main`
  padding-block: 7rem;
  & > * + * {
    margin-top: 7rem;
  }
`;

const ProductDetails = () => {
  const { getProductList } = useProductList();
  const { slug } = useParams();

  const product = getProductList().find(
    (item) => item.slug === slug
  ) as ProductType;
  const otherProducts = product?.others as OtherProducts;
  const gallery = product?.gallery as ProductGalleryType;
  const features = product?.features as ProductFeaturesType;
  const includes = product?.includes as IncludesType;

  return (
    <Container full fullVertical style={{ paddingTop: "5.5rem" }}>
      <ProductDetailsMain>
        <ProductPreview product={product} />
        <Container>
          <Grid xs={{ rowGap: 7 }}>
            <Features features={features} />
            <InTheBox includes={includes} />
          </Grid>
        </Container>
        <ProductGallery gallery={gallery} />
        <AlsoLikeProducts list={otherProducts} />
        <CategoryCardList />
        <About />
      </ProductDetailsMain>
    </Container>
  );
};

export default ProductDetails;
