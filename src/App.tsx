import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import theme from "./theme";
import { Footer, Navbar, ScrollToTop } from "./components";
import { Home, Headphones, Speakers, Earphones, ProductDetails } from "./pages";
import { MenuListType, ProductListType } from "./globalTypes";
import myData from "./data.json";

const menuList: MenuListType = [
  { id: 1, path: "/", name: "home" },
  { id: 2, path: "/headphones", name: "headphones" },
  { id: 3, path: "/speakers", name: "speakers" },
  { id: 4, path: "/earphones", name: "earphones" },
];

const productList = myData as ProductListType;

function App() {
  // sort new products to top of the page
  const headphonesList = productList
    .filter((item) => item.category === "headphones")
    .sort((a, b) => Number(b.new) - Number(a.new));
  const speakersList = productList
    .filter((item) => item.category === "speakers")
    .sort((a, b) => Number(b.new) - Number(a.new));
  const earphonesList = productList
    .filter((item) => item.category === "earphones")
    .sort((a, b) => Number(b.new) - Number(a.new));

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <GlobalStyle />
        <Navbar menuList={menuList} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/headphones"
            element={<Headphones headphonesList={headphonesList} />}
          />
          <Route
            path="/headphones/:productSlug"
            element={<ProductDetails productList={productList} />}
          />
          <Route
            path="/speakers"
            element={<Speakers speakersList={speakersList} />}
          />
          <Route
            path="/speakers/:productSlug"
            element={<ProductDetails productList={productList} />}
          />
          <Route
            path="/earphones"
            element={<Earphones earphonesList={earphonesList} />}
          />
          <Route
            path="/earphones/:productSlug"
            element={<ProductDetails productList={productList} />}
          />
        </Routes>
        <Footer menuList={menuList} />
      </ThemeProvider>
    </div>
  );
}

export default App;
