import React from "react";
import Home from "../Home";
import { makeStyles } from "@material-ui/core/styles";
import About from "../About";
import Resume from "../Resume";
import AppForm from "../AppForm";
import Portfolio from "../Portfolio,";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
    width: "100%",
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
        <AppForm />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}
