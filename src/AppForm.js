import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Heading from "./components/Heading";
import { Button, TextareaAutosize } from "@material-ui/core";
import colors from "./colors";

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
        <TextField
          id="outlined-secondary"
          label="Name"
          color="secondary"
          variant="outlined"
          className={classes.textField}
          required
        />
        <TextField
          id="outlined-secondary"
          label="Email"
          variant="outlined"
          color="secondary"
          className={classes.textField}
          // fullWidth
          required
        />
        <TextField
          id="outlined-secondary"
          label="Subject"
          variant="outlined"
          color="secondary"
          className={classes.textField}
          required
        />

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
        <br />
        <Button variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </div>
  );
}
