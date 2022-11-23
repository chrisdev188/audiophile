import { CategoryProducts } from "../../components";
import { ProductListType } from "../../types";

interface SpeakersProps {
  speakersList: ProductListType;
}

const Speakers: React.FunctionComponent<SpeakersProps> = ({ speakersList }) => {
  return (
    <div>
      <CategoryProducts list={speakersList} categoryName="speakers" />
    </div>
  );
};

export default Speakers;
