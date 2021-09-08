import React from "react";
import { Container } from "@material-ui/core";
import colors from "./colors";

function Footer() {
  return (
    <div style={{ background: colors.grey, height: 200 }}>
      <Container>
        <h1>Saddy Ahmed</h1>
      </Container>
    </div>
  );
}

export default Footer;
