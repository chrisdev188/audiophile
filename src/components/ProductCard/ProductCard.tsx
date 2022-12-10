import { Typography } from "..";
import Grid from "../Grid/Grid";
import { StyledProductCard } from "./ProductCard.styles";
import { ProductCardProps } from "./ProductCard.types";

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
            media="(min-width:650px)"
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
