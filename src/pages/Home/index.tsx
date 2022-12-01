import { About, ProductNavigation } from "../../components";
import { Main } from "../../globalStyles";
import HomeHero from "./HomeHero";
import HomeProductGallery from "./HomeProductGallery";

interface HomeProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FunctionComponent<HomeProps> = ({ setShowMenu }) => {
  return (
    <>
      <HomeHero />
      <Main>
        <ProductNavigation setShowMenu={setShowMenu} />
        <HomeProductGallery />
        <About />
      </Main>
    </>
  );
};

export default Home;
