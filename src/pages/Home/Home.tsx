import { About, CategoryCardList } from "../../components";
import HomeHero from "./HomeHero";
import HomeProductGallery from "./HomeProductGallery";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <CategoryCardList />
      <HomeProductGallery />
      <About />
    </main>
  );
};

export default Home;
