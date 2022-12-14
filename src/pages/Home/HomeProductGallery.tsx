import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container, Flex, Grid, Typography } from "../../components";
import media from "../../helpers/styles/mediaQueries";

const StyledZX9Speaker = styled.div`
  height: 37.5rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  background-image: url("/assets/home/desktop/pattern-circles.svg");
  background-size: cover;
  background-position: center -130px;
  background-repeat: no-repeat;
  border-radius: var(--round-md);
  text-align: center;
  display: grid;
  align-items: center;
  padding: 1rem;

  .image {
    width: 10rem;
    justify-self: center;
    img {
      width: 100%;
    }
  }
  .content {
    max-width: 24rem;
    justify-self: center;
  }
  ${media.up("sm")`
      height:45rem;
      grid-column: span 6;
      background-position: center -150px;
      padding:0;
      .image {
        grid-column: span 6;
        width:14rem;
      }
      .content {
        grid-column: span 6;
      }
    `}
  ${media.up("md")`
      height:35rem;
      grid-column: span 12;
      background-position: -220px 0;
      position: relative;
      overflow: hidden;
      .image { 
        width:20rem;
        position: absolute;
        bottom:-1rem;
        left:7rem;
        grid-column:unset;       
      }
      .content { 
        grid-column: 8 / span 4;
        align-items: start;
        text-align:left;
      }
    `}
    ${media.up("lg")`
      background-position: -220px 0;
      .image { 
        width:25rem;
        left:10rem;
      }
      .content { 
        grid-column: 7 / span 5;
        text-align:left;
        align-items: start;
      }
    `}
`;
const StyledZX7Speaker = styled.div`
  height: 20rem;
  padding: 1rem;
  display: grid;
  justify-content: start;
  align-items: center;
  position: relative;
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: var(--round-md);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  ${media.up("sm")`
      padding-left:2rem;
      grid-column: span 6;
      .heading, .action{
        grid-column: span 6;
      }
  `}
  ${media.up("md")`
      padding-left:4rem;
      grid-column: span 12;
      .heading{
        grid-column: span 6;
        grid-row:1;
      }
      .action{
        grid-column: span 6;
        grid-row:2;
      }
  `}
`;
const StyledYX1Earphone = styled.div`
  .image,
  .content {
    height: 12.5rem;
    border-radius: var(--round-md);
    grid-column: span 1;
  }
  .image {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .content {
    background-color: ${({ theme }) => theme.palette.card};
    display: grid;
    align-items: center;
    justify-content: start;
    padding: 1rem;
  }
  ${media.up("sm")`
    grid-column: span 6;
    .image,.content{
      grid-column: span 3;
      height:16rem;
    }
    .content{
      padding-left:2rem;
    }
  `}
  ${media.up("md")`
    grid-column: span 12;
    .image,.content{
      grid-column: span 6;
      height:20rem;
    }
    .content{
      padding-left:4rem;
    }
  `}
`;

const ZX9Speaker = () => (
  <StyledZX9Speaker>
    <Grid xs={{ rowGap: 3 }}>
      <picture className="image">
        <source
          srcSet="/assets/home/desktop/image-speaker-zx9.png"
          media="(min-width:1200px)"
        />
        <source
          srcSet="/assets/home/tablet/image-speaker-zx9.png"
          media="(min-width:650px)"
        />
        <img
          src="/assets/home/mobile/image-speaker-zx9.png"
          alt="ZX9 speaker"
        />
      </picture>
      <Flex
        xs={{
          direction: "column",
          items: "center",
          content: "center",
          gap: 1.5,
        }}
        md={{ items: "flex-end" }}
        className="content"
      >
        <Typography component="h3" variant="h1" textColor="light">
          ZX9 SPEAKER
        </Typography>
        <Typography textColor="lightAlt">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Typography>
        <Link to="/speakers/zx9-speaker">
          <Button color="primary">see product</Button>
        </Link>
      </Flex>
    </Grid>
  </StyledZX9Speaker>
);

const ZX7Speaker = () => (
  <StyledZX7Speaker>
    <Flex xs={{ direction: "column", gap: 2, items: "flex-start" }}>
      <picture className="image">
        <source
          srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
          media="(min-width:1200px)"
        />
        <source
          srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
          media="(min-width:650px)"
        />
        <img
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="ZX7 speaker"
        />
      </picture>
      <Typography component="h3" variant="h4" className="heading">
        ZX7 SPEAKER
      </Typography>
      <Link to="/speakers/zx7-speaker">
        <Button variant="outlined" className="action">
          see product
        </Button>
      </Link>
    </Flex>
  </StyledZX7Speaker>
);

const YX1Earphones = () => (
  <StyledYX1Earphone>
    <Grid xs={{ rowGap: 1.5 }} md={{ rowGap: 2 }} lg={{ rowGap: 2.5 }}>
      <picture className="image">
        <source
          srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
          media="(min-width:1200px)"
        />
        <source
          srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
          media="(min-width:650px)"
        />
        <img
          src="/assets/home/mobile/image-earphones-yx1.jpg"
          alt="YX1 earphones"
        />
      </picture>
      <div className="content">
        <Flex xs={{ direction: "column", gap: 2, items: "flex-start" }}>
          <Typography className="heading" component="h3" variant="h4">
            YX1 EARPHONES
          </Typography>
          <Link to="/earphones/yx1-earphones">
            <Button variant="outlined" className="action">
              see product
            </Button>
          </Link>
        </Flex>
      </div>
    </Grid>
  </StyledYX1Earphone>
);

const HomeProductGallery = () => {
  return (
    <section>
      <Container>
        <Grid xs={{ rowGap: 1.5 }} md={{ rowGap: 2 }} lg={{ rowGap: 2.5 }}>
          <ZX9Speaker />
          <ZX7Speaker />
          <YX1Earphones />
        </Grid>
      </Container>
    </section>
  );
};

export default HomeProductGallery;
