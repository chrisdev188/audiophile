import { MaxWidthContainer } from "../../styles";
import {
  StyledProducCategoryContainer,
  StyledProductCategoryList,
  CategoryItem,
  ProductThumbnail,
  ProductName,
} from "./styles";
import headphoneImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ButtonText from "../UI/Button/ButtonText";
import { Link } from "react-router-dom";

const categoryList = [
  { id: 1, name: "headphones", path: "/headphones", imgSrc: headphoneImg },
  { id: 2, name: "speakers", path: "/speakers", imgSrc: speakerImg },
  { id: 3, name: "earphones", path: "/earphones", imgSrc: earphoneImg },
];

interface ProductCategoryListProps {}

const ProductCategoryList: React.FunctionComponent<ProductCategoryListProps> = (
  props
) => {
  return (
    <StyledProducCategoryContainer>
      <MaxWidthContainer>
        <StyledProductCategoryList as="ul">
          {categoryList.map((category) => (
            <CategoryItem key={category.id}>
              <ProductThumbnail src={category.imgSrc} alt={category.name} />
              <ProductName as="h3">{category.name}</ProductName>
              <Link to={category.path}>
                <ButtonText>shop now</ButtonText>
              </Link>
            </CategoryItem>
          ))}
        </StyledProductCategoryList>
      </MaxWidthContainer>
    </StyledProducCategoryContainer>
  );
};

export default ProductCategoryList;
