import React from "react";
import { Typography } from "@material-ui/core";
import colors from "../colors";

function WorkExperience({ title, subTitle, content, color }) {
  return (
    <>
      <div
        style={{
          border: "1px solid grey",
          padding: 20,
          marginBottom: 20,
          borderLeft: `8px solid ${color}`,
          borderRadius: 25,
        }}
      >
        <h2 style={{ fontWeight: 500 }}>{title}</h2>
        <p style={{ marginBottom: 15 }}>{subTitle}</p>
        <Typography style={{ color: colors.grey2 }}>{content}</Typography>
      </div>
    </>
  );
}

export default WorkExperience;
