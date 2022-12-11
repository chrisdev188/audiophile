import { Link } from "react-router-dom";
import { ArrowRightIcon, ButtonWithIcons, Grid, Typography } from "..";
import { useNavigationContext } from "../../context/NavigationContext";
import Container from "../Container/Container";
import { CardBody, CardMedia, CategoryCard } from "./CategoryCardList.styles";

export const ProductCategories = [
  {
    name: "headphones",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    path: "/headphones",
  },
  {
    name: "speakers",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    path: "/speakers",
  },
  {
    name: "earphones",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    path: "/earphones",
  },
];

export interface ICategoryCardListProps {}

const CategoryCardList: React.FC<ICategoryCardListProps> = ({}) => {
  const { closeMenu } = useNavigationContext();
  return (
    <Container fullVertical>
      <Grid xs={{ rowGap: 2 }}>
        {ProductCategories.map((category) => (
          <CategoryCard key={category.name}>
            <CardMedia>
              <img src={category.imgSrc} alt={category.name} />
            </CardMedia>
            <CardBody>
              <Typography component="h3" variant="h6">
                {category.name}
              </Typography>
              <Link to={`/${category.name}`} onClick={closeMenu}>
                <ButtonWithIcons variant="text" iconEnd={<ArrowRightIcon />}>
                  shop
                </ButtonWithIcons>
              </Link>
            </CardBody>
          </CategoryCard>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryCardList;
