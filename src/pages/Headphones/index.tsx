import { ProductCategory } from "../../pages";
import { ProductListType } from "../../globalTypes";

interface HeadphonesProps {
  headphonesList: ProductListType;
}

const Headphones: React.FunctionComponent<HeadphonesProps> = ({
  headphonesList,
}) => {
  return (
    <div>
      <ProductCategory list={headphonesList} categoryName="headphones" />
    </div>
  );
};

export default Headphones;
