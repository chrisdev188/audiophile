import { About, ProductCategoryList } from "../../components";
import Hero from "./Hero";
import HomeProductGallery from "./HomeProductGallery";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <div>
      <Hero />
      <ProductCategoryList />
      <HomeProductGallery />
      <About />
    </div>
  );
};

export default Home;
