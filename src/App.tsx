import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import theme from "./theme";
import { CartModal, Footer, Navbar, ScrollToTop } from "./components";
import { Home, Headphones, Speakers, Earphones, ProductDetails } from "./pages";
import {
  CartItemType,
  CartListType,
  MenuListType,
  ProductListType,
} from "./globalTypes";
import myData from "./data.json";

const menuList: MenuListType = [
  { id: 1, path: "/", name: "home" },
  { id: 2, path: "/headphones", name: "headphones" },
  { id: 3, path: "/speakers", name: "speakers" },
  { id: 4, path: "/earphones", name: "earphones" },
];

const productList = myData as ProductListType;

function App() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [currentWindowSize, setCurrentWindowSize] = useState(window.innerWidth);
  const [shoppingCartList, setShoppingCartList] = useState<CartListType>([]);
  const numberOfShoppingItem = shoppingCartList.length;

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

  // hide menu on big screen sizes
  useEffect(() => {
    const breakpoint = 900;
    const handleHideMenu = () => {
      setCurrentWindowSize(window.innerWidth);
      if (currentWindowSize > breakpoint) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleHideMenu);
    return () => window.removeEventListener("resize", handleHideMenu);
  }, [currentWindowSize]);

  // prevent scroll when menu shown
  useEffect(() => {
    if (showMenu || showCartModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMenu, showCartModal]);

  // when url path change, hide menu
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  const handleAddItemToShoppingList = useCallback((newItem: CartItemType) => {
    setShoppingCartList((prevList) => {
      // !! operator is used to convert thing to boolean
      const isNewItemInCart = !!prevList.find(
        (item) => item.name === newItem.name
      );
      if (!isNewItemInCart) {
        return [...prevList, newItem];
      } else {
        return prevList.map((item) => {
          return item.name === newItem.name
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item;
        });
      }
    });
  }, []);

  const handleUpdateCartItemQuantity = useCallback((newItem: CartItemType) => {
    setShoppingCartList((prevList) => {
      // !! operator is used to convert thing to boolean
      const isNewItemInCart = !!prevList.find(
        (item) => item.name === newItem.name
      );
      if (!isNewItemInCart) {
        return [...prevList, newItem];
      } else {
        return prevList.map((item) => {
          return item.name === newItem.name
            ? { ...item, quantity: newItem.quantity }
            : item;
        });
      }
    });
  }, []);

  const handleRemoveItemFromShoppingList = useCallback(() => {
    setShoppingCartList((prevList) => {
      return prevList.filter((item) => item.quantity >= 1);
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <GlobalStyle />
        <Navbar
          menuList={menuList}
          showMenu={showMenu as boolean}
          setShowMenu={setShowMenu}
          setShowCartModal={setShowCartModal}
          numberOfShoppingItem={numberOfShoppingItem}
        />
        {showCartModal && (
          <CartModal
            handleUpdateCartItemQuantity={handleUpdateCartItemQuantity}
            handleRemoveItemFromShoppingList={handleRemoveItemFromShoppingList}
            shoppingCartList={shoppingCartList}
          />
        )}
        <Routes>
          <Route path="/" element={<Home setShowMenu={setShowMenu} />} />
          <Route
            path="/headphones"
            element={<Headphones headphonesList={headphonesList} />}
          />
          <Route
            path="/headphones/:productSlug"
            element={
              <ProductDetails
                productList={productList}
                handleAddItemToShoppingList={handleAddItemToShoppingList}
              />
            }
          />
          <Route
            path="/speakers"
            element={<Speakers speakersList={speakersList} />}
          />
          <Route
            path="/speakers/:productSlug"
            element={
              <ProductDetails
                productList={productList}
                handleAddItemToShoppingList={handleAddItemToShoppingList}
              />
            }
          />
          <Route
            path="/earphones"
            element={<Earphones earphonesList={earphonesList} />}
          />
          <Route
            path="/earphones/:productSlug"
            element={
              <ProductDetails
                productList={productList}
                handleAddItemToShoppingList={handleAddItemToShoppingList}
              />
            }
          />
        </Routes>
        <Footer menuList={menuList} />
      </ThemeProvider>
    </div>
  );
}

export default App;
