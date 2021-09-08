import React from "react";
import Grid from "@material-ui/core/Grid";
import colors from "./colors";
import Divider from "@material-ui/core/Divider";
import profile from "./images/saddybg-preview.png";
import Heading from "./components/Heading";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ProgressBar from "./components/ProgressBar";
import CGrid from "./components/Grid";
import WorkExperience from "./components/WorkExperience";

function Resume() {
  return (
    <div style={{ padding: 40, background: colors.black, color: colors.light }}>
      <Heading text={"Resume"} />
      <div
        style={{
          width: "100%",
          height: 200,
          background: colors.black,
          // borderBottom: "1px solid #fff",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={5}>
            <img
              src={profile}
              alt="profile"
              width={150}
              height={150}
              style={{ border: "3px solid #fff", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={7}>
            <div style={{ marginBottom: 20 }}>
              <h1>Saddy Ahmed</h1>
              <p>Web and Mobile Developer</p>
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: 30 }}
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
          </Grid>
        </Grid>
      </div>

      <Divider style={{ background: "#ffff" }} />

      <div style={{ paddingTop: 20 }}>
        <CGrid
          title={"Professional Skills"}
          children={
            <>
              <ProgressBar value={90} name={"HTML"} />
              <ProgressBar value={70} name={"CSS"} />
              <ProgressBar value={40} name={"JAVASCRIPT"} />
              <ProgressBar value={65} name={"REACT"} />
              <ProgressBar value={80} name={"REACT NATIVE"} />{" "}
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
