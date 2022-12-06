import { ProductListType, useProductList } from "../context/ProductListContext";

const Earphones = () => {
  const productList = useProductList() as ProductListType;

  const earphonesList = productList.filter(
    (product) => product.category === "earphones"
  );

  return (
    <main>
      <div>
        {earphonesList.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </main>
  );
};

export default Earphones;
