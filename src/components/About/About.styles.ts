import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

const StyledAbout = styled.section`
  .image {
    grid-column: span 1;
    order: -1;
    height: 100%;
    border-radius: ${({ theme }) => theme.shape.borderRadius.md};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    ${media.up("sm")`
    order:unset;
    grid-column: span 3;
    
  `}
    ${media.up("md")`
    grid-column: 7 / span 6;
   
  `}
  }
  .content {
    & > * + * {
      margin-top: 2rem;
    }
    text-align: center;
    grid-column: span 1;
    ${media.up("sm")`
    grid-column: span 3;
    align-self: center;
    text-align:left;
  `}
    ${media.up("md")`
    grid-column: span 5;
    align-self: center;
  `}
  }
`;

export default StyledAbout;
