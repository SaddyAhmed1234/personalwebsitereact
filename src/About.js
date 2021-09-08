import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import profile from "./images/saddybg-preview.png";
import colors from "./colors";
import List from "@material-ui/core/List";
import RLisItem from "./components/RListItem";
import ListItemW from "./components/ListItemW";
import Divider from "@material-ui/core/Divider";
import Heading from "./components/Heading";

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
  },
  h1: {
    fontSize: 35,
    marginBottom: 10,
  },
  [theme.breakpoints.down("sm")]: {
    image: {
      width: 300,
      height: 300,
      marginBottom: 40,
    },
  },
}));

export default function WholeContent() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Heading text={"About Me"} />
        {/* <Divider /> */}
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs>
            <img
              src={profile}
              alt="profile"
              width={500}
              height={500}
              className={classes.image}
            />
          </Grid>
          <Grid item xs className={classes.descGrid}>
            <h1 className={classes.h1}>I am Saddy</h1>
            <h1 className={classes.h1}>
              I am a Professional web designer and Developer
            </h1>
            <p style={{ paddingBottom: 20 }}>
              I am a full fleshed web developer works with full development
              knowlwdge and try always to follow the best way to build things. I
              am also a mobile developer,I make both android and ios apps by
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
          </Grid>
        </Grid>
      </div>
      <Divider style={{ background: colors.grey }} />
    </>
  );
}
