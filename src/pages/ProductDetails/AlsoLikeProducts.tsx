import * as React from "react";
import { Link } from "react-router-dom";
import { Button, ResponsiveImage } from "../../components";
import {
  Container,
  HeadingLG,
  HeadingSM,
  MaxWidthContainer,
} from "../../styles";
import { ProductListType, ProductType, ResponsiveImageType } from "../../types";
import {
  AlsoLikeCard,
  AlsoLikeHeading,
  StyledAlsoLikeProducts,
} from "./styles";

interface AlsoLikeProductsProps {
  productList: ProductListType;
  others: Array<{ name: string; slug: string; image: ResponsiveImageType }>;
}

const getImageUrl = (path: string) => {
  return new URL(`../../${path}`, import.meta.url).href;
};

const AlsoLikeProducts: React.FunctionComponent<AlsoLikeProductsProps> = ({
  productList,
  others,
}) => {
  return (
    <Container>
      <MaxWidthContainer>
        <AlsoLikeHeading as="h3">you may also like</AlsoLikeHeading>
        <StyledAlsoLikeProducts as="ul">
          {others.map((product) => (
            <li key={product.name}>
              <AlsoLikeCard>
                <ResponsiveImage
                  name={product.name}
                  mobileSrc={getImageUrl(product.image.mobile)}
                  tabletSrc={getImageUrl(product.image.tablet)}
                  desktopSrc={getImageUrl(product.image.desktop)}
                />
                <HeadingSM as="h4">{product.name}</HeadingSM>
                <Link
                  to={`/${
                    (
                      productList.find(
                        (p) => p.slug === product.slug
                      ) as ProductType
                    ).category
                  }/${product.slug}`}
                >
                  <Button variant="filled">see product</Button>
                </Link>
              </AlsoLikeCard>
            </li>
          ))}
        </StyledAlsoLikeProducts>
      </MaxWidthContainer>
    </Container>
  );
};

export default AlsoLikeProducts;
