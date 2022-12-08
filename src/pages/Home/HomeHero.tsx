import { Link } from "react-router-dom";
import { Button, Container, Flex } from "../../components";
import Typography from "../../components/Typography/Typography";
import { HeroImage, StyledHomeHero } from "./HomeHero.styles";

const HomeHeroImage = () => {
  return (
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
  );
};

const HomeTextContent = () => {
  return (
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
          <Typography variant="overline" component="span" textColor="lightAlt">
            new product
          </Typography>
          <Typography variant="h1" component="h2" textColor="light">
            XX99 Mark II Headphones
          </Typography>
          <Typography variant="body" textColor="lightAlt">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>
          <Link to="/headphones/xx99-mark-two-headphones">
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "1rem" }}
            >
              see product
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

const HomeHero = () => {
  return (
    <StyledHomeHero>
      <HomeHeroImage />
      <HomeTextContent />
    </StyledHomeHero>
  );
};

export default HomeHero;
