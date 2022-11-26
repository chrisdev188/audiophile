import { About, ProductCategoryList } from "../../components";
import { Main } from "../../globalStyles";
import HomeHero from "./HomeHero";
import HomeProductGallery from "./HomeProductGallery";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <>
      <HomeHero />
      <Main>
        <ProductCategoryList />
        <HomeProductGallery />
        <About />
      </Main>
    </>
  );
};

export default Home;
