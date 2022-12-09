import styled from "styled-components";
import { Typography } from "..";
import { ProductType } from "../../context/ProductListContext";
import media from "../../helpers/styles/mediaQueries";
import Grid from "../Grid/Grid";

interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  product: ProductType;
  children: React.ReactNode;
}

const StyledProductCard = styled.article<ProductCardProps>`
  .card-body {
    max-width: 35rem;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    ${media.up("sm")`
      grid-column: span 6;
      align-items:center;
      text-align: center;
    `}
    ${media.up("md")`
      grid-column: 8 / span 5;
      align-self: center;
      align-items:flex-start;
      text-align: left;
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
      grid-column: span 6;
      align-self: center;
    `}
    ${media.up("md")`
      grid-column: span 6;
    `}
  }
  &.odds {
    ${media.up("md")`
      .card-body {
        order: -1;
        grid-column:1 / span 5;
      }
      .card-media {
        grid-column:7 / span 6;
      }
    `}
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({
  children,
  product,
  ...otherProps
}) => {
  return (
    <StyledProductCard product={product} {...otherProps}>
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
          <img src={product.categoryImage.mobile} alt={product.name} />
        </picture>
        <div className="card-body">
          {product.new && (
            <Typography variant="overline" component="span" textColor="accent">
              new product
            </Typography>
          )}
          <Typography component="h3" variant="h3">
            {product.name}
          </Typography>
          <Typography>{product.description}</Typography>
          {children}
        </div>
      </Grid>
    </StyledProductCard>
  );
};

export default ProductCard;
