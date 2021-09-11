import React from "react";
import Grid from "@material-ui/core/Grid";
import colors from "./colors";
import Divider from "@material-ui/core/Divider";
import profile from "./images/saddybg-preview.png";
import Heading from "./components/Heading";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ProgressBar from "./components/ProgressBar";
import CGrid from "./components/Grid";
import WorkExperience from "./components/WorkExperience";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // height: 200,
    background:
      "background: linear-gradient(90deg, rgba(0,30,71,0.8519782913165266) 10%, rgba(0,0,0,0.8631827731092436) 84%);",
    paddingBottom: 30,
  },
  image: {
    border: "3px solid #fff",
    borderRadius: "50%",
  },
  button: {
    marginRight: 30,
  },
  mainContainer: {
    padding: 40,
    color: colors.light,
    background:
      "linear-gradient(90deg, rgba(0,30,71,0.8519782913165266) 10%, rgba(0,0,0,0.8631827731092436) 90%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  [theme.breakpoints.down("sm")]: {
    image: {
      textAlign: "center",
    },
    container: {
      textAlign: "center",
      height: "auto",
    },
    buttonContainer: {
      textAlign: "left",
    },
    // button: {
    //   marginBottom: 20,
    // },
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer} id="Resume">
      <Heading text={"Resume"} />
      <div className={classes.container}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={12} lg={4} md={4}>
            <div>
              <img
                src={profile}
                alt="profile"
                width={150}
                height={150}
                className={classes.image}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={8} md={8}>
            <div>
              <div style={{ marginBottom: 20 }}>
                <h1>Saddy Ahmed</h1>
                <p>Web and Mobile Developer</p>
              </div>
              <div className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  // style={{ marginRight: 30 }}
                  className={classes.button}
                  startIcon={<GetAppIcon />}
                >
                  Download cv
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<FavoriteIcon />}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <Divider style={{ background: colors.grey }} />

      <div style={{ paddingTop: 40 }}>
        <CGrid
          title={"Professional Skills"}
          children={
            <>
              <div data-aos="fade-up">
                <ProgressBar value={90} name={"HTML"} />
                <ProgressBar value={70} name={"CSS"} />
                <ProgressBar value={40} name={"JAVASCRIPT"} />
                <ProgressBar value={65} name={"REACT"} />
                <ProgressBar value={80} name={"REACT NATIVE"} />
              </div>
            </>
          }
        />

        <CGrid
          title={"Work Experience"}
          children={
            <>
              <WorkExperience
                color={colors.blue}
                title="Frontend Developer at Creative Agency"
                subTitle="May, 2015 - Present"
                content="Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition."
              />

              <WorkExperience
                color={colors.blue}
                title="Graphic Designer at Design Studio"
                subTitle="June, 2013 - May, 2015"
                content="Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
              />

              <WorkExperience
                color={colors.blue}
                title="Junior Web Developer at Indie Studio"
                subTitle="Jan, 2011 - May, 2013"
                content="User generated content in real-time will have multiple touchpoints for offshoring. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
              />
            </>
          }
        />

        <CGrid
          title={"Education"}
          children={
            <>
              <WorkExperience
                color={colors.secondary}
                title="Masters in Information Technology from International University"
                subTitle="2011 - 2013"
                content="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
              />
              <WorkExperience
                color={colors.secondary}
                title="Bachelor of Computer Science from Regional College"
                subTitle="2007 - 2011"
                content="Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
              />
              <WorkExperience
                color={colors.secondary}
                title="Science and Mathematics from Mt. High Scool"
                subTitle="1995 - 2007"
                content="User generated content in real-time will have multiple touchpoints for offshoring. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
              />
            </>
          }
        />
      </div>
    </div>
  );
}

export default Resume;
