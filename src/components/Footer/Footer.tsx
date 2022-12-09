import styled from "styled-components";
import Container from "../Container/Container";

interface IFooterProps {}

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <StyledFooter>
      <Container>
        <div className="logo"></div>
        <div className="menu-list"></div>
        <div className="info"></div>
        <div className="social-links"></div>
        <div className="copy-right"></div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
