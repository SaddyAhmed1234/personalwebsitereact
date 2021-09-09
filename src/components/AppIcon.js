import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as FontAwsome from "react-icons/fa";
import { ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    transition: 0.3,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    "&:hover": {
      color: "#fff",
    },
  },
}));

function AppIcon({ color, IconName }) {
  const classes = useStyles();
  const Icon = FontAwsome[IconName];
  return (
    <Link to="/" className={classes.container}>
      <Icon color={color} size={25} className={classes.icon} />
    </Link>
  );
}

export default AppIcon;
