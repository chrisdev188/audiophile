import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface ILayoutProps {
  children: React.ReactElement;
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
