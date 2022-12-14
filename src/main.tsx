import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ProductListProvider } from "./context/ProductListContext";
import theme from "./theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ProductListProvider>
          <App />
        </ProductListProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
