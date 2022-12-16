import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Typography from "../Typography/Typography";
import StyledAbout, { AboutImage, AboutText } from "./About.styles";

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Grid xs={{ rowGap: 3 }} sm={{ rowGap: 2 }}>
          <AboutText>
            <Typography component="h3" variant="h3">
              Bringing you the{" "}
              <span style={{ color: "var(--clr-txt-accent)" }}>best</span> audio
              gear
            </Typography>
            <Typography component="p" variant="body" textColor="darkAlt">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Typography>
          </AboutText>
          <AboutImage>
            <source
              srcSet="/assets/shared/desktop/image-best-gear.jpg"
              media="(min-width:1200px)"
            />
            <source
              srcSet="/assets/shared/tablet/image-best-gear.jpg"
              media="(min-width:650px)"
            />
            <img
              src="/assets/shared/mobile/image-best-gear.jpg"
              alt="a man wearing headphones"
            />
          </AboutImage>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
