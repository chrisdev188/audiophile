import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  body{
    min-height: 100vh;
    line-height:normal;
    overflow:hidden;
  }
  ul{ 
    list-style:none;
  }
  img{
    display:block;
    max-width: 100%;
    height:auto;
  }
  input, textarea{
    font:inherit;
    display:block;
    width:100%;
  }
  button{
    cursor:pointer;
    font:inherit;
    background-color:transparent;
    border:none;
    outline:none;
  }
  a{
    display:inline-block;
    text-decoration: none;
    color:unset;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight:bold;
    letter-spacing:1px;
  }
  p{
    line-height:1.65;
  }

 `;
export default GlobalStyle;
