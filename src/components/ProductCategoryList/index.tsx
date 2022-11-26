import { Container, HeadingXS, MaxWidthContainer } from "../../globalStyles";
import { CategoryList, CategoryItem, ProductThumbnail } from "./styles";
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
    <Container as="section">
      <MaxWidthContainer>
        <CategoryList as="ul">
          {categoryList.map((category) => (
            <CategoryItem key={category.id}>
              <ProductThumbnail src={category.imgSrc} alt={category.name} />
              <HeadingXS as="h3">{category.name}</HeadingXS>
              <Link to={category.path}>
                <ButtonText>shop now</ButtonText>
              </Link>
            </CategoryItem>
          ))}
        </CategoryList>
      </MaxWidthContainer>
    </Container>
  );
};

export default ProductCategoryList;
