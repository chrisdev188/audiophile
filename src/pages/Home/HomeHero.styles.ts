import styled from "styled-components";

export const StyledHomeHero = styled.header`
  padding-top: 5.5rem;
  height: 95vh;
  position: relative;
  display: grid;
  justify-content: stretch;
  align-items: center;
`;

export const HeroImage = styled.div`
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
  }
`;
