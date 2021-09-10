import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "./animation/programming2.json";
import Lottie from "react-lottie";
import colors from "./colors";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    background:
      "linear-gradient(90deg, rgba(0,30,71,0.8519782913165266) 10%, rgba(0,0,0,0.8631827731092436) 90%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    zIndex: 10,
    color: colors.light,
  },
  text2: {
    color: colors.light,
  },
  shadow: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.9,
  },
  containerHeader: {
    flexGrow: 1,
    zIndex: 23,
    paddingLeft: 40,
    fontFamily: "Balsamiq Sans",
  },

  [theme.breakpoints.down("sm")]: {
    text: {
      fontSize: 45,
    },

    textContainer: {
      marginBottom: 50,
    },
  },
}));

function Home() {
  // const homeRef = useRef(null);
  const classes = useStyles();
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  // const executeHomeScrool = () => {

  // }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.container} id="Home">
      <Container className={classes.containerHeader}>
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
            <div style={{ maxWidth: 1000 }}>
              <Lottie
                options={defaultOptions}
                width={isSmallDevice ? 320 : 450}
                height={isSmallDevice ? 320 : 450}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
