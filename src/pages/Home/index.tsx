import { About, ProductNavigation } from "../../components";
import { Main } from "../../globalStyles";
import HomeHero from "./HomeHero";
import HomeProductGallery from "./HomeProductGallery";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <>
      <HomeHero />
      <Main>
        <ProductNavigation />
        <HomeProductGallery />
        <About />
      </Main>
    </>
  );
};

export default Home;
