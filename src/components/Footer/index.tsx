import { MaxWidthContainer } from "../../globalStyles";
import {
  FooterNav,
  StyledFooter,
  FooterGrid,
  FooterDescription,
  CopyrightText,
  FooterCopyright,
} from "./styles";
import Logo from "../Logo";
import { MenuListType } from "../../globalTypes";
import MenuList from "./MenuList";
import SocialList from "./SocialList";

interface FooterProps {
  menuList: MenuListType;
}

const Footer: React.FunctionComponent<FooterProps> = ({ menuList }) => {
  return (
    <StyledFooter as="footer">
      <MaxWidthContainer>
        <FooterGrid>
          <FooterNav>
            <Logo />
            <MenuList menuList={menuList} />
          </FooterNav>
          <FooterDescription>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FooterDescription>
          <FooterCopyright>
            <CopyrightText>Copyright 2021. All Rights Reserved</CopyrightText>
            <SocialList />
          </FooterCopyright>
        </FooterGrid>
      </MaxWidthContainer>
    </StyledFooter>
  );
};

export default Footer;
