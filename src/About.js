import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import profile from "./images/saddybg-preview.png";
import colors from "./colors";
import List from "@material-ui/core/List";
import RLisItem from "./components/RListItem";
import ListItemW from "./components/ListItemW";
import Divider from "@material-ui/core/Divider";
import Heading from "./components/Heading";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  container: {
    background: colors.light,
    paddingTop: 40,
    paddingRight: 40,
    paddingLeft: 40,
    color: colors.black,
    // paddingBottom: 30,
  },
  image: {
    float: "left",
    // opacity: 0.7,
    width: "100%",
    height: "100%",
    marginBottom: 30,
  },
  h1: {
    fontSize: 35,
    marginBottom: 10,
  },
  imageCon: {
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    width: 300,
    height: 290,
    objectFit: "cover",
    background: `linear-gradient(90deg, rgba(0,30,71,0.8519782913165266) 10%, rgba(0,0,0,0.8631827731092436) 90%)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  [theme.breakpoints.down("sm")]: {
    image: {
      // marginBottom: 100,
      // float: "none",
    },
  },
}));

export default function WholeContent() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container} id="About">
        <Heading text={"About Me"} />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} lg={5}>
            <div data-aos="fade-up" className={classes.imageContainer}>
              <div className={classes.imageCon}>
                <img src={profile} alt="profile" className={classes.image} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={7} className={classes.descGrid}>
            <div data-aos="fade-up">
              <h1 className={classes.h1}>I am Saddy</h1>
              <h1 className={classes.h1}>
                I am a Professional web designer and Developer
              </h1>
              <p style={{ paddingBottom: 20 }}>
                I am a full fleshed web developer works with full development
                knowlwdge and try always to follow the best way to build things.
                I am also a mobile developer,I make both android and ios apps by
                react native
              </p>

              <Divider style={{ background: colors.grey }} />

              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item xs>
                  <List>
                    <RLisItem text="Name :" />
                    <RLisItem text="Address :" />
                    <RLisItem text="Email :" />
                    <RLisItem text="Phone :" />
                    <RLisItem text="Facebook :" />
                    <RLisItem text="Instagram :" />
                  </List>
                </Grid>
                <Grid item xs>
                  <List>
                    <ListItemW text="Saddy Ahmed" />
                    <ListItemW text="benapole,Jessore" />
                    <ListItemW text="saddyrspp2042@gmail.com" />
                    <ListItemW text="01750******" />
                    <ListItemW text="Saddy Ahmed" />
                    <ListItemW text="@FaceBook" />
                  </List>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider style={{ background: colors.grey }} />
    </>
  );
}
