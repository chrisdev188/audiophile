import Hero from "./Hero";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
