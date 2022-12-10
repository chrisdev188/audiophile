import styled from "styled-components";
import { Flex, Grid, Typography } from "..";
import media from "../../helpers/styles/mediaQueries";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import SocialList from "../SocialList/SocialList";
import { FooterLine, StyledFooter } from "./Footer.styles";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <StyledFooter>
      <Container fullVertical>
        <Grid xs={{ rowGap: 3 }}>
          <Flex
            xs={{ direction: "column", gap: 2, items: "center" }}
            sm={{
              direction: "row",
              items: "flex-end",
              content: "space-between",
              gap: 1,
            }}
            className="logo-container"
          >
            <Flex
              xs={{ direction: "column", gap: 2, items: "center" }}
              sm={{ gap: 3, items: "flex-start" }}
            >
              <FooterLine />
              <Logo />
            </Flex>
            <MenuList className="footer-menu" />
          </Flex>
          <Typography textColor="lightAlt" className="footer-info">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Typography>
          <Flex
            xs={{ direction: "column", gap: 2, items: "center" }}
            sm={{
              direction: "row",
              content: "space-between",
              gutterTop: 2,
            }}
            className="links-container"
          >
            <Typography component="small" textColor="lightAlt">
              Copyright 2021. All Rights Reserved
            </Typography>
            <SocialList className="footer-social-list" />
          </Flex>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
