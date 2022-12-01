import { ProductCategory } from "../../pages";
import { ProductListType } from "../../globalTypes";

interface EarphonesProps {
  earphonesList: ProductListType;
}

const Earphones: React.FunctionComponent<EarphonesProps> = ({
  earphonesList,
}) => {
  return (
    <div>
      <ProductCategory list={earphonesList} categoryName="earphones" />
    </div>
  );
};

export default Earphones;
