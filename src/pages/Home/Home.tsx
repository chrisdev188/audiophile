import { About, CategoryCardList } from "../../components";
import HomeHero from "./HomeHero";
import { HomeMain } from "./HomeHero.styles";
import HomeProductGallery from "./HomeProductGallery";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeMain>
        <CategoryCardList />
        <HomeProductGallery />
        <About />
      </HomeMain>
    </>
  );
};

export default Home;
