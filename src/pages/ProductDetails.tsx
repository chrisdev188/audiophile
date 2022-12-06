import { useParams } from "react-router-dom";
import { useProductList } from "../context/ProductListContext";

const ProductDetails = () => {
  const productList = useProductList();
  const { slug } = useParams();

  const product = productList.find((item) => item.slug === slug);

  return (
    <main>
      <div>{product?.id}</div>
      <div>{product?.name}</div>
      <div>{product?.slug}</div>
    </main>
  );
};

export default ProductDetails;
