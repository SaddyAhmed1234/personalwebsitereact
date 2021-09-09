import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Heading from "./components/Heading";
import { Button, TextareaAutosize } from "@material-ui/core";
import colors from "./colors";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  textField: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    textField: {
      width: "100%",
    },
  },
}));

export default function ColorTextFields() {
  const classes = useStyles();

  return (
    <div
      style={{
        padding: 40,
        background: colors.light,
      }}
    >
      <Heading text="Contact Me" />
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ textAlign: "center" }}
      >
        <div data-aos="fade-up" style={{ width: "100%" }}>
          <TextField
            id="outlined-secondary"
            label="Name"
            color="secondary"
            variant="outlined"
            className={classes.textField}
            required
          />
        </div>
        <div data-aos="fade-up" style={{ width: "100%" }}>
          <TextField
            id="outlined-secondary"
            label="Email"
            variant="outlined"
            color="secondary"
            className={classes.textField}
            // fullWidth
            required
          />
        </div>
        <div data-aos="fade-up" style={{ width: "100%" }}>
          <TextField
            id="outlined-secondary"
            label="Subject"
            variant="outlined"
            color="secondary"
            className={classes.textField}
            required
          />
        </div>
        <div data-aos="fade-up" style={{ width: "100%" }}>
          <TextField
            id="outlined-secondary"
            label="Message"
            variant="outlined"
            color="secondary"
            className={classes.textField}
            required
            minRows={6}
            multiline
            maxRows={10}
          />
        </div>

        <br />
        <div data-aos="fade-up" style={{ width: "100%" }}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
