import { ProductCategory } from "../../pages";
import { ProductListType } from "../../globalTypes";

interface SpeakersProps {
  speakersList: ProductListType;
}

const Speakers: React.FunctionComponent<SpeakersProps> = ({ speakersList }) => {
  return (
    <div>
      <ProductCategory list={speakersList} categoryName="speakers" />
    </div>
  );
};

export default Speakers;
