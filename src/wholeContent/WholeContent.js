import React from "react";
import Home from "../Home";
import { makeStyles } from "@material-ui/core/styles";
import About from "../About";
import Resume from "../Resume";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
  },
}));

export default function WholeContent() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Home />
        <About />
        <Resume />
      </div>
    </>
  );
}
