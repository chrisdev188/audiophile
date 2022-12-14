import { NavContextProvider } from "../../context/NavigationContext";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface ILayoutProps {
  children?: React.ReactElement;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <NavContextProvider>
      <Navbar />
      {children}
      <Footer />
    </NavContextProvider>
  );
};

export default Layout;
