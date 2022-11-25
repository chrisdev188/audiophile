import { MaxWidthContainer } from "../../../styles";
import { StyledProductPreview } from "../styles";

interface ProductPreviewProps {}

const ProductPreview: React.FunctionComponent<ProductPreviewProps> = ({}) => {
  return (
    <StyledProductPreview as="section">
      <MaxWidthContainer>product preview</MaxWidthContainer>
    </StyledProductPreview>
  );
};

export default ProductPreview;
