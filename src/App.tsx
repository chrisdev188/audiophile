import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles";
import theme from "./theme";
import { Footer, Navbar, ScrollToTop } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Headphones, Speakers, Earphones } from "./pages";
import { MenuListType } from "./types";
import myData from "./data.json";
import { useEffect } from "react";

const menuList: MenuListType = [
  { id: 1, path: "/", name: "home" },
  { id: 2, path: "/headphones", name: "headphones" },
  { id: 3, path: "/speakers", name: "speakers" },
  { id: 4, path: "/earphones", name: "earphones" },
];

function App() {
  useEffect(() => {
    console.log(myData);
  }, []);

  // sort new products to top of the page
  const headphonesList = myData
    .filter((item) => item.category === "headphones")
    .sort((a, b) => Number(b.new) - Number(a.new));
  const speakersList = myData
    .filter((item) => item.category === "speakers")
    .sort((a, b) => Number(b.new) - Number(a.new));
  const earphonesList = myData
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
            path="/speakers"
            element={<Speakers speakersList={speakersList} />}
          />
          <Route
            path="/earphones"
            element={<Earphones earphonesList={earphonesList} />}
          />
        </Routes>
        <Footer menuList={menuList} />
      </ThemeProvider>
    </div>
  );
}

export default App;
