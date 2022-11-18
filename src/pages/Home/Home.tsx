import { ProductCategoryList } from "../../components";
import Hero from "./Hero";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <div>
      <Hero />
      <ProductCategoryList />
    </div>
  );
};

export default Home;
