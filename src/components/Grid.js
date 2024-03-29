import React from "react";
import { Divider, Grid } from "@material-ui/core";
import colors from "../colors";

function CGrid({ title, children }) {
  return (
    <Grid container style={{ marginBottom: 70 }} spacing={3}>
      <Grid item xs={12} lg={4} md={4}>
        <h1>{title}</h1>
      </Grid>
      <Grid item xs={12} lg={8} md={8}>
        {children}
      </Grid>
    </Grid>
  );
}

export default CGrid;
