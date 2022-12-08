import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyles, Layout } from "./components";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Speakers from "./pages/Speakers";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="headphones/:slug" element={<ProductDetails />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="speakers/:slug" element={<ProductDetails />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/earphones/:slug" element={<ProductDetails />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
