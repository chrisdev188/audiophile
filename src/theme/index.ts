import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  shape: {
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "16px",
    },
  },
  palette: {
    primary: {
      main: "#101010",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D87D4A",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#CD2C2C",
      contrastText: "#FFFFFF",
    },
    divider: "rgba(255,255,255,.2)",
    card: "#F1F1F1",
    text: {
      dark: "#000000",
      light: "#FFFFFF",
      accent: "#D87D4A",
      error: "#FFFFFF",
      darkAlt: "rgba(0,0,0,.5)",
      lightAlt: "rgba(255,255,255,.75)",
    },
  },
  typography: {
    h1: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "56px",
      fontWeight: 700,
      letterSpacing: "2px",
      lineHeight: "58px",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "40px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      lineHeight: "44px",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "32px",
      fontWeight: 700,
      letterSpacing: "1.15px",
      lineHeight: "36px",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "28px",
      fontWeight: 700,
      letterSpacing: "2px",
      lineHeight: "38px",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "24px",
      fontWeight: 700,
      letterSpacing: "1.7px",
      lineHeight: "33px",
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "18px",
      fontWeight: 700,
      letterSpacing: "1.3px",
      lineHeight: "24px",
      textTransform: "uppercase",
    },
    body: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "15px",
      fontWeight: 500,
      letterSpacing: "0px",
      lineHeight: "25px",
    },
    overline: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      letterSpacing: "10px",
      lineHeight: "19px",
      textTransform: "uppercase",
    },
    subtitle: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "1px",
      lineHeight: "25px",
      textTransform: "uppercase",
    },
    button: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "1px",
      lineHeight: "18px",
      textTransform: "uppercase",
    },
    navLink: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2px",
      lineHeight: "25px",
      textTransform: "uppercase",
    },
  },
  // spacing between element in a component
  spacing: {
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
  },
  // margin between components
  gutters: {
    sm: "3rem",
    md: "5rem",
    lg: "7rem",
  },
  mediaQueries: {
    xs: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1440px",
  },
};

export default theme;
