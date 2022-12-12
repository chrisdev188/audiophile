import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --nav-height:6rem;
    font-size: 16px;
  }
  *,*::before, *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    min-height:100vh;
    overflow-x: hidden;
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
  img{
    min-width:100%;
    display:block;
    height:auto;
  }
  picture,video{
    display:block;
  }

  
`;
export default GlobalStyle;
