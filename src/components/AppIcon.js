import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as FontAwsome from "react-icons/fa";
import colors from "../colors";

const useStyles = makeStyles(() => ({
  container: {
    transition: "width 2s",
    marginLeft: 10,
    marginRight: 10,
  },
}));

function AppIcon({ color, IconName }) {
  const classes = useStyles();
  const Icon = FontAwsome[IconName];
  const [hover, setHover] = useState(false);
  return (
    <Link
      to="#"
      className={classes.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon
        color={hover ? colors.secondary : color}
        size={25}
        className={classes.icon}
      />
    </Link>
  );
}

export default AppIcon;
