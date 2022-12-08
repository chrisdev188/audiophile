import styled, { useTheme } from "styled-components";
import { Button, Grid, Typography } from "..";
import { CategoryType, useProductList } from "../../context/ProductListContext";
import media from "../../helpers/styles/mediaQueries";
import Container from "../Container/Container";

interface IProductListByCategoryProps {
  category: CategoryType;
}

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  img {
    width: 100%;
  }
`;
const ProductCard = styled.article`
  .card-body {
    max-width: 35rem;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    ${media.up("sm")`
      grid-column: span 3;
      align-self: center;
      align-items:flex-start;
      text-align: left;
    `}
    ${media.up("md")`
      grid-column: span 6;
    `}
    ${media.up("lg")`
      grid-column: 8 / span 5;
    `}
  }
  .card-media {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    ${media.up("sm")`
      grid-column: span 3;
      align-self: center;
    `}
    ${media.up("md")`
      grid-column: span 6;
    `}
  }
  &.odds {
    ${media.up("sm")`
      .card-body {
        order: -1;
      }
    `}
    ${media.up("md")`
      .card-body {
        grid-column:1 / span 5;
      }
      .card-media {
        grid-column:7 / span 6;
      }
    `}
  }
`;

const ProductListByCategory: React.FunctionComponent<
  IProductListByCategoryProps
> = (props) => {
  const { category } = props;
  const theme = useTheme();
  const productList = useProductList();
  const listByCategory = productList.filter(
    (product) => product.category === category
  );
  // sort product by property new, if new === true, product will be on the top
  const sortedProductListByNew = listByCategory.sort((a, b) => +b.new - +a.new);

  return (
    <section>
      <Container>
        <ProductList>
          {sortedProductListByNew.map((product, index) => (
            <li key={product.id}>
              <ProductCard className={`${index % 2 === 1 && "odds"}`}>
                <Grid xs={{ rowGap: 3 }}>
                  <picture className="card-media">
                    <source
                      srcSet={product.categoryImage.desktop}
                      media="(min-width:1200px)"
                    />
                    <source
                      srcSet={product.categoryImage.tablet}
                      media="(min-width:600px)"
                    />
                    <img
                      src={product.categoryImage.mobile}
                      alt={product.name}
                    />
                  </picture>
                  <div className="card-body">
                    {product.new && (
                      <Typography
                        variant="overline"
                        component="span"
                        style={{ color: theme.palette.text.accent }}
                      >
                        new product
                      </Typography>
                    )}
                    <Typography component="h3" variant="h3">
                      {product.name}
                    </Typography>
                    <Typography>{product.description}</Typography>
                    <Button color="secondary" style={{ marginTop: "1rem" }}>
                      see product
                    </Button>
                  </div>
                </Grid>
              </ProductCard>
            </li>
          ))}
        </ProductList>
      </Container>
    </section>
  );
};

export default ProductListByCategory;
