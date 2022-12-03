import { Container, HeadingXS, MaxWidthContainer } from "../../globalStyles";
import { CategoryList, CategoryItem, ProductThumbnail } from "./styles";
// import headphoneImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
// import speakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
// import earphoneImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ButtonText from "../UI/Button/ButtonText";
import { Link } from "react-router-dom";

const categoryList = [
  {
    id: 1,
    name: "headphones",
    path: "/headphones",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    id: 2,
    name: "speakers",
    path: "/speakers",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    id: 3,
    name: "earphones",
    path: "/earphones",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

const ProductNavigation: React.FC = () => {
  return (
    <Container as="nav">
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

export default ProductNavigation;
