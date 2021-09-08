import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import colors from "../colors";
import { List, ListItem } from "@material-ui/core";

function ProgressBar({ value, name }) {
  return (
    <>
      <Typography>{name}</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={value}
          style={{ width: "80%", height: 7, borderRadius: 10 }}
        />
        <Typography> {`${value}%`} </Typography>
      </div>
    </>
  );
}

export default ProgressBar;
