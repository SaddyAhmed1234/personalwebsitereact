import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import back from "./images/back.jpg";
// import Typical from "react-typical";
import animationData from "./animation/programming2.json";
import Lottie from "react-lottie";
import colors from "./colors";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    // background: "grey",
    height: "100%",
    backgroundImage: `url(${back})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 68,
    paddingTop: 20,
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    zIndex: 10,
    color: colors.light,
  },
  text2: {
    color: colors.light,
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.6,
  },
  containerHeader: {
    flexGrow: 1,
    zIndex: 23,
    paddingLeft: 40,
    fontFamily: "Balsamiq Sans",
  },
}));

function Home() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.container}>
      <div className={classes.shadow}></div>
      <div className={classes.containerHeader}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs>
            <div className={classes.textContainer}>
              <h1 className={classes.text}>I am a Developer</h1>
              <h1 className={classes.text2}>I am a Designer</h1>
            </div>
          </Grid>
          <Grid item xs>
            <div>
              <Lottie options={defaultOptions} height={500} width={500} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
