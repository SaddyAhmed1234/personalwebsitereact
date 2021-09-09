import React from "react";
import colors from "./colors";
import { List, makeStyles } from "@material-ui/core";
import AppIcon from "./components/AppIcon";

const useStyle = makeStyles((theme) => ({
  container: {
    background: colors.black,
    // height: 200,

    color: colors.white,
    padding: 60,
  },
  footerContainer: {
    justifyItems: "center",
    display: "grid",
  },
  made: {
    float: "right",
  },
  [theme.breakpoints.down("sm")]: {
    made: {
      float: "none",
      justifyItems: "center",
      display: "grid",
    },
  },
}));

function Footer() {
  const classes = useStyle();
  return (
    <footer className={classes.container}>
      <div className={classes.footerContainer}>
        <div
          style={{
            display: "flex",
            marginBottom: 20,
          }}
        >
          <AppIcon IconName={"FaFacebook"} color={colors.white} />
          <AppIcon IconName={"FaInstagram"} color={colors.white} />
          <AppIcon IconName={"FaTwitter"} color={colors.white} />
          <AppIcon IconName={"FaLinkedin"} color={colors.white} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <i>All Copyright reserved @2021</i>
        </div>
      </div>
      <div className={classes.made}>
        <i style={{ color: colors.grey2 }}>
          Made and designed by
          <span style={{ color: colors.secondary }}> Saddy Ahmed</span>
        </i>
      </div>
    </footer>
  );
}

export default Footer;
