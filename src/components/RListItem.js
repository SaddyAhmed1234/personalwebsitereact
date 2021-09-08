import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import colors from "../colors";

function RListItem({ text }) {
  return (
    <ListItem style={{ padding: 0 }}>
      <ListItemText style={{ color: colors.secondary }}> {text} </ListItemText>
    </ListItem>
  );
}

export default RListItem;
