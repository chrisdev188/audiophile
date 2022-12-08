import styled from "styled-components";
import { ArrowRightIcon, ButtonWithIcons, Grid, Typography } from "..";
import media from "../../helpers/styles/mediaQueries";
import Container from "../Container/Container";

const CategoryCard = styled.div`
  padding-top: 5rem;
  grid-column: span 1;
  position: relative;
  ${media.up("sm")`
    grid-column: span 2;
  `}
  ${media.up("md")`
    grid-column: span 4;
  `}
`;
const CardMedia = styled.div`
  width: 10rem;
  grid-row: 1 / span 2;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-50% + 5rem));
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
const CardBody = styled.div`
  background-color: ${({ theme }) => theme.palette.card};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  width: 100%;
  padding: 5rem 0 1rem 0;
  display: grid;
  justify-items: center;
  gap: 1rem;
  ${media.up("md")`
    padding-bottom:2rem;
  `};
`;

const ProductCategories = [
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

const ByProductNavigation = () => {
  return (
    <Container>
      <Grid xs={{ rowGap: 5 }} sm={{ colGap: 1 }} md={{ colGap: 2 }}>
        {ProductCategories.map((category) => (
          <CategoryCard key={category.name}>
            <CardMedia>
              <img src={category.imgSrc} alt={category.name} />
            </CardMedia>
            <CardBody>
              <Typography component="h3" variant="h6">
                {category.name}
              </Typography>
              <ButtonWithIcons variant="text" iconEnd={<ArrowRightIcon />}>
                shop
              </ButtonWithIcons>
            </CardBody>
          </CategoryCard>
        ))}
      </Grid>
    </Container>
  );
};

export default ByProductNavigation;
