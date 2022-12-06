import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    min-height:100vh;
    overflow: hidden;
  }
  ul{ 
    list-style-type: none;
  }
  a{ 
    color:unset;
    text-decoration: none;
    display: inline-block;
  }
  button{
    font:inherit;
    background-color:transparent;
    border:none;
    outline:none;
    cursor:pointer;
  }
  
`;
export default GlobalStyle;
