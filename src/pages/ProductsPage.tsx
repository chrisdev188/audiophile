import styled from "styled-components";
import {
  About,
  CategoryCardList,
  Container,
  ProductListByCategory,
  Typography,
} from "../components";
import { CategoryType } from "../context/ProductListContext";

interface ProductsPageProps {
  category: CategoryType;
}

export const PageHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-align: center;
  padding-top: 5.5rem;
`;

const PageMain = styled.main`
  padding-block: 7rem;
  & > * + * {
    margin-top: 7rem;
  }
`;

const ProductsPage: React.FC<ProductsPageProps> = ({ category }) => {
  return (
    <Container fullVertical full>
      <PageHeader>
        <Container style={{ paddingBlock: "5rem" }}>
          <Typography component="h1" variant="h2">
            {category}
          </Typography>
        </Container>
      </PageHeader>
      <PageMain>
        <ProductListByCategory category={category} />
        <CategoryCardList />
        <About />
      </PageMain>
    </Container>
  );
};

export default ProductsPage;
