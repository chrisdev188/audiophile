import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  body{
    font-family: "Manrope", sans-serif;
    min-height: 100vh;
    line-height:normal;
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
 `;

export const HeadingXXL = styled.div`
  line-height: 1.035;
  letter-spacing: 2px;
  font-size: clamp(2rem, 6vw, 3.5rem);
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;
export const HeadingXL = styled.div`
  letter-spacing: 1.5px;
  line-height: 1.1;
  font-size: clamp(1.75rem, 5vw, 2.75rem);
  text-transform: uppercase;
  font-weight: bold;
`;
export const HeadingLG = styled.div`
  letter-spacing: 1.15px;
  line-height: 1.125;
  font-size: clamp(1.5rem, 4vw, 2rem);
  text-transform: uppercase;
  font-weight: bold;
`;
export const HeadingMD = styled.div`
  letter-spacing: 2px;
  line-height: 1.35;
  font-size: clamp(1.25rem, 3vw, 2.375rem);
  text-transform: uppercase;
  font-weight: bold;
`;
export const HeadingSM = styled.div`
  letter-spacing: 1.75px;
  line-height: 1.375;
  font-size: clamp(1rem, 3vw, 1.5rem);
  text-transform: uppercase;
  font-weight: bold;
`;
export const HeadingXS = styled.div`
  letter-spacing: 1.3px;
  line-height: 1.33;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: bold;
`;
export const Overline = styled.small`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 1.35;
`;
export const Subtitle = styled.small`
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.92;
  font-size: 0.8125;
  font-weight: bold;
`;
export const Paragraph = styled.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  font-weight: 500;
`;
export const Container = styled.div`
  @media (min-width: 768px) {
    padding-inline: 2.5rem;
  }
`;
export const MaxWidthContainer = styled.div`
  max-width: 1140px;
  margin: auto;
  padding-inline: 1.5rem;
  @media (min-width: 768px) {
    padding-inline: 0;
  }
`;
export const TwelveColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
  }
`;

export const Main = styled(Container)`
  padding-block: 10rem;
  padding-inline: 0;
  & > * + * {
    margin-top: 10rem;
  }
`;

export default GlobalStyle;
