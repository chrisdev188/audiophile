import { CategoryProducts } from "../../components";
import { ProductListType } from "../../globalTypes";

interface HeadphonesProps {
  headphonesList: ProductListType;
}

const Headphones: React.FunctionComponent<HeadphonesProps> = ({
  headphonesList,
}) => {
  return (
    <div>
      <CategoryProducts list={headphonesList} categoryName="headphones" />
    </div>
  );
};

export default Headphones;
