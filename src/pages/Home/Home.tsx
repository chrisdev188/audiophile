import { About, ProductCategoryList } from "../../components";
import { Main } from "../../styles";
import Hero from "./Hero";
import HomeProductGallery from "./HomeProductGallery";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <>
      <Hero />
      <Main>
        <ProductCategoryList />
        <HomeProductGallery />
        <About />
      </Main>
    </>
  );
};

export default Home;
