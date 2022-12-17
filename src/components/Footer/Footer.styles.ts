import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  padding-bottom: 2rem;
  .footer-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      padding: 0.5rem;
    }
  }
  ${media.up("sm")`
    .logo-container,.footer-info, .links-container{
      grid-column: span 6;
    }
    .footer-info{
      text-align: left;
    }
    .footer-menu{
      flex-direction:row;
      a{
        padding-block:0;
      }
    }
  `}
  ${media.up("md")`
    .logo-container,.footer-info, .links-container{
      grid-column: span 12;
    }
    .footer-info{
      grid-column:span 7;
      text-align: left;
    }
  `}
  ${media.up("lg")`
    .footer-social-list{
      position:relative;
      top:-7rem;
    }
  `}
`;
export const FooterLine = styled.div`
  width: 7rem;
  height: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;
