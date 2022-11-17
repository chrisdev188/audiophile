import styled, { ThemeProvider, css } from "styled-components";
import theme from "./theme";
import { Button } from "./components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
}

export default App;
