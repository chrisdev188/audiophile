import styled from "styled-components";
import { Container, Grid } from "../../components";
import { ProductGalleryType } from "../../context/ProductListContext";
import media from "../../helpers/styles/mediaQueries";

interface IProductGalleryProps {
  gallery: ProductGalleryType;
}

const StyledGallery = styled.section`
  .first,
  .second,
  .third {
    border-radius: var(--round-md);
    grid-column: span 1;
    img {
      width: 100%;
      border-radius: inherit;
    }
  }
  ${media.up("sm")`
    .first,
    .second {
      grid-column:span 3;
    }
    .third{
      grid-column:span 6;
    }
  `}
  ${media.up("md")`
    .first{
      grid-column:1 / span 5;
      grid-row:1;
    }
    .second{
      grid-column:1 / span 5;
      grid-row:2;
    }
    .third{
      grid-column: 6 / span 7;
      grid-row: 1 / span 2;
    }
    
  `}
`;

const ProductGallery: React.FunctionComponent<IProductGalleryProps> = ({
  gallery,
}) => {
  const { first: firstImage, second: secondImage, third: thirdImage } = gallery;
  return (
    <StyledGallery>
      <Container>
        <Grid
          xs={{ rowGap: 1 }}
          sm={{ rowGap: 1.5 }}
          md={{ rowGap: 2 }}
          lg={{ rowGap: 2.5 }}
        >
          <picture className="first">
            <source srcSet={firstImage.desktop} media="(min-width:1200px)" />
            <source srcSet={firstImage.tablet} media="(min-width:650px)" />
            <img src={firstImage.mobile} alt="first" />
          </picture>
          <picture className="second">
            <source srcSet={secondImage.desktop} media="(min-width:1200px)" />
            <source srcSet={secondImage.tablet} media="(min-width:650px)" />
            <img src={secondImage.mobile} alt="second" />
          </picture>
          <picture className="third">
            <source srcSet={thirdImage.desktop} media="(min-width:1200px)" />
            <source srcSet={thirdImage.tablet} media="(min-width:650px)" />
            <img src={thirdImage.mobile} alt="third" />
          </picture>
        </Grid>
      </Container>
    </StyledGallery>
  );
};

export default ProductGallery;
