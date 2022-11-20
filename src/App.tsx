import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import theme from "./theme";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Headphones, Speakers, Earphones } from "./pages";

type MenuList = Array<{
  id: number;
  path: string;
  name: string;
}>;

const menuList: MenuList = [
  { id: 1, path: "/", name: "home" },
  { id: 2, path: "/headphones", name: "headphones" },
  { id: 3, path: "/speakers", name: "speakers" },
  { id: 4, path: "/earphones", name: "earphones" },
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar menuList={menuList} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
