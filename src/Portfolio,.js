import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ImgMediaCard from "./components/AppCard";
import Heading from "./components/Heading";
import { Container } from "@material-ui/core";
import colors from "./colors";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      "linear-gradient(90deg, rgba(0,30,71,0.8519782913165266) 10%, rgba(0,0,0,0.8631827731092436) 90%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: 50,
    // paddingLeft: 100,
    paddingBottom: 50,
    overflowX: "hidden",
    overflowY: "hidden",
  },
}));

const Portfolio = () => {
  const classses = useStyles();
  return (
    <div className={classses.container} id="Portfolio">
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
          <Grid
            item
            xs={12}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ImgMediaCard image={image1} />
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ImgMediaCard image={image2} />
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ImgMediaCard image={image3} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            xs={12}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ImgMediaCard image={image1} />
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ImgMediaCard image={image2} />
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ImgMediaCard image={image3} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Portfolio;
