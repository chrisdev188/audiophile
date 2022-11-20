import {
  MaxWidthContainer,
  Paragraph,
  TwelveColumnsGrid,
} from "../../globalStyles";
import { FooterNav, StyledFooter } from "./styles";
import logo from "../../assets/shared/desktop/logo.svg";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return (
    <StyledFooter as="footer">
      <MaxWidthContainer>
        <TwelveColumnsGrid>
          <FooterNav>
            <div className="logo">
              <img src={logo} alt="Audiophile" />
            </div>
            <ul>menulist</ul>
          </FooterNav>
          <Paragraph>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Paragraph>
          <div className="flex">
            <small>Copyright 2021. All Rights Reserved</small>
            <ul>sosialist</ul>
          </div>
        </TwelveColumnsGrid>
      </MaxWidthContainer>
    </StyledFooter>
  );
};

export default Footer;
