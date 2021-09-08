import React from "react";
import { Grid } from "@material-ui/core";
import ImgMediaCard from "./components/AppCard";
import Heading from "./components/Heading";
import { Container } from "@material-ui/core";
import colors from "./colors";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const Portfolio = () => {
  return (
    <div
      style={{
        background: colors.black,
        paddingTop: 50,
        paddingLeft: 100,
        paddingBottom: 50,
      }}
    >
      <Container style={{ padding: 0, flexGrow: 1 }}>
        <Heading text="Portfolio" />
        <Grid
          container
          style={{ marginBottom: 50 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs>
            <ImgMediaCard image={image1} />
          </Grid>

          <Grid item xs>
            <ImgMediaCard image={image2} />
          </Grid>

          <Grid item xs>
            <ImgMediaCard image={image3} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <ImgMediaCard image={image1} />
          </Grid>

          <Grid item xs>
            <ImgMediaCard image={image2} />
          </Grid>

          <Grid item xs>
            <ImgMediaCard image={image3} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Portfolio;
