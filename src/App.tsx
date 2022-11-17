import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import theme from "./theme";

function App() {
  const [title, setTitle] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
