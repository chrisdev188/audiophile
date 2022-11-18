import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  HeadingSix,
  MaxWidthContainer,
  TwelveColumnsGrid,
} from "../../globalStyles";
import headphoneImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ButtonText from "../UI/Button/ButtonText";

const StyledProducCategoryContainer = styled(Container)`
  margin-block: 10rem;
`;
const StyledProductCategoryList = styled(TwelveColumnsGrid)`
  gap: 7rem;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
const CategoryItem = styled.li`
  padding: 5rem 1rem 2.5rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  position: relative;
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;
const ProductThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 10rem;
`;
const ProductName = styled(HeadingSix)``;

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
              <ButtonText>shop now</ButtonText>
            </CategoryItem>
          ))}
        </StyledProductCategoryList>
      </MaxWidthContainer>
    </StyledProducCategoryContainer>
  );
};

export default ProductCategoryList;
