import styled from "styled-components";
import { Button, Container, Flex, Grid, Typography } from "../../components";
import { OtherProducts } from "../../context/ProductListContext";
import media from "../../helpers/styles/mediaQueries";

interface IAlsoLikeProductsProps {
  list: OtherProducts;
}

const AlsoLikeList = styled.ul`
  li {
    grid-column: span 1;
    ${media.up("sm")`
      grid-column: span 2;
    `}
    ${media.up("md")`
      grid-column: span 4;
    `}
  }
  picture {
    width: 100%;
    border-radius: ${({ theme }) => theme.shape.borderRadius.md};
    img {
      width: 100%;
      border-radius: inherit;
    }
  }
`;

const AlsoLikeProducts: React.FunctionComponent<IAlsoLikeProductsProps> = ({
  list,
}) => {
  return (
    <section>
      <Container>
        <AlsoLikeList>
          <Grid xs={{ rowGap: 3.5 }}>
            {list.map(({ name, image, slug }) => (
              <li key={name}>
                <Flex xs={{ direction: "column", items: "center", gap: 2 }}>
                  <picture>
                    <source srcSet={image.desktop} media="(min-width:1200px)" />
                    <source srcSet={image.tablet} media="(min-width:650px)" />
                    <img src={image.mobile} alt={name} />
                  </picture>
                  <Typography component="h4" variant="h6">
                    {name}
                  </Typography>
                  <Button color="secondary">see product</Button>
                </Flex>
              </li>
            ))}
          </Grid>
        </AlsoLikeList>
      </Container>
    </section>
  );
};

export default AlsoLikeProducts;
