import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Typography from "../Typography/Typography";

const AboutText = styled.div`
  & > * + * {
    margin-top: 2rem;
  }
  grid-column: span 1;
  ${media.up("sm")`
    grid-column: span 3;
    align-self: center;
  `}
  ${media.up("md")`
    grid-column: span 5;
    align-self: center;
  `}
`;
const AboutImage = styled.div`
  grid-column: span 1;
  order: -1;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${media.up("sm")`
    order:unset;
    grid-column: span 3;
    align-self: center;
  `}
  ${media.up("md")`
    grid-column: 7 / span 6;
    align-self: center;
  `}
`;

const About = () => {
  return (
    <section>
      <Container>
        <Grid xs={{ rowGap: 3 }} sm={{ rowGap: 2, colGap: 2 }}>
          <AboutText>
            <Typography component="h3" variant="h3">
              Bringing you the best audio gear
            </Typography>
            <Typography component="p" variant="body">
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
            <img
              src="https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              alt="animal"
            />
          </AboutImage>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
