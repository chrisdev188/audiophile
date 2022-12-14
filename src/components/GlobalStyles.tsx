import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    /* COLORS */
    --clr-primary: ${({ theme }) => theme.palette.primary.main};
    --clr-secondary: ${({ theme }) => theme.palette.secondary.main};
    --clr-error: ${({ theme }) => theme.palette.error.main};
    --clr-contrast-txt-primary: ${({ theme }) =>
      theme.palette.primary.contrastText};
    --clr-contrast-txt-secondary: ${({ theme }) =>
      theme.palette.secondary.contrastText};
    --clr-contrast-txt-error: ${({ theme }) =>
      theme.palette.error.contrastText};
    --clr-txt-light: ${({ theme }) => theme.palette.text.light};
    --clr-txt-light-alt: ${({ theme }) => theme.palette.text.lightAlt};
    --clr-txt-dark: ${({ theme }) => theme.palette.text.dark};
    --clr-txt-dark-alt: ${({ theme }) => theme.palette.text.darkAlt};
    --clr-txt-error: ${({ theme }) => theme.palette.text.error};

    /* SHAPES */
    --round-sm:4px;
    --round-md:0.5rem;
    --round-lg:1rem;

    /* NAVBAR HEIGHT */
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
  input:not([type="checkbox"], [type="radio"]){
    display:block;
    width:100%;
    font:inherit;
  }
  label, legend{
    font:inherit;
  }
  
`;
export default GlobalStyle;
