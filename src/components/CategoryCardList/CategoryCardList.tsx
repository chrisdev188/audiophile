import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ButtonWithIcons, Grid, Typography } from "..";
import { useNavigationContext } from "../../context/NavigationContext";
import Container from "../Container/Container";
import { CardBody, CardMedia, CategoryCard } from "./CategoryCardList.styles";

export const productCategories = [
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

const CategoryCardList = () => {
  const { closeMenu } = useNavigationContext();
  return (
    <Container fullVertical>
      <Grid xs={{ rowGap: 2 }}>
        {productCategories.map((category) => (
          <CategoryCard key={category.name}>
            <CardMedia>
              <img src={category.imgSrc} alt={category.name} />
            </CardMedia>
            <CardBody>
              <Typography component="h3" variant="h6">
                {category.name}
              </Typography>
              <ButtonWithIcons
                as={Link}
                to={`/${category.name}`}
                variant="text"
                iconEnd={<ArrowRightIcon />}
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                shop
              </ButtonWithIcons>
            </CardBody>
          </CategoryCard>
        ))}
      </Grid>
    </Container>
  );
};

export default React.memo(CategoryCardList);
