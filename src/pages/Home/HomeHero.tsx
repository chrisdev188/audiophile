import styled from "styled-components";
import { Button, Container, Flex } from "../../components";
import Typography from "../../components/Typography/Typography";
import media from "../../helpers/styles/mediaQueries";

interface IHomeHeroProps {}

const StyledHomeHero = styled.section`
  padding-top: 5.5rem;
  height: 95vh;
  position: relative;
  display: grid;
  justify-content: stretch;
  align-items: center;
`;

const HeroImage = styled.div`
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

const HomeHero: React.FunctionComponent<IHomeHeroProps> = (props) => {
  return (
    <StyledHomeHero>
      <Container fullVertical style={{ height: "100%" }}>
        <Flex
          xs={{ items: "center", content: "center" }}
          lg={{ content: "flex-start" }}
          style={{ height: "100%" }}
        >
          <Flex
            xs={{
              direction: "column",
              gap: 2,
              items: "center",
              textAlign: "center",
            }}
            lg={{ items: "flex-start", textAlign: "left" }}
            style={{ maxWidth: "25rem" }}
          >
            <Typography
              variant="overline"
              component="span"
              textColor="lightAlt"
            >
              NEW PRODUCT
            </Typography>
            <Typography variant="h1" component="h2" textColor="light">
              XX99 Mark II Headphones
            </Typography>
            <Typography variant="body" textColor="lightAlt">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "1rem" }}
            >
              see product
            </Button>
          </Flex>
        </Flex>
      </Container>
      <HeroImage>
        <picture>
          <source
            srcSet="./assets/home/desktop/image-hero.jpg"
            media="(min-width: 1200px)"
          />
          <source
            srcSet="./assets/home/tablet/image-hero.jpg"
            media="(min-width: 600px)"
          />
          <img
            src="./assets/home/mobile/image-hero.jpg"
            alt="XX99 Mark II Headphones"
          />
        </picture>
      </HeroImage>
    </StyledHomeHero>
  );
};

export default HomeHero;
