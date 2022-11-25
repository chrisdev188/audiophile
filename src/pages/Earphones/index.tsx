import { CategoryProducts } from "../../components";
import { ProductListType } from "../../types";

interface EarphonesProps {
  earphonesList: ProductListType;
}

const Earphones: React.FunctionComponent<EarphonesProps> = ({
  earphonesList,
}) => {
  return (
    <div>
      <CategoryProducts list={earphonesList} categoryName="earphones" />
    </div>
  );
};

export default Earphones;
