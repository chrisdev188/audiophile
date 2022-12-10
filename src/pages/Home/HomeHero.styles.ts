import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

export const StyledHomeHero = styled.header`
  padding-top: 5.5rem;
  height: 95vh;
  position: relative;
  display: grid;
  justify-content: stretch;
  align-items: center;
`;

export const HeroImage = styled.div`
  background-color: #1a1a1a;
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img,
  picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: lighten;
    z-index: 1;
  }
  ${media.up("md")`
  img{
    object-fit:contain;
    }
  `}
`;

export const HomeMain = styled.main`
  padding-block: 7rem;
  & > * + * {
    margin-top: 7rem;
  }
`;
