import React from "react";
import animationData from "../animation/line-animation.json";
import Lottie from "react-lottie";
import colors from "../colors";

function Heading({ text }) {
  const defaultOptions = {
    loop: 10,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <h1
        style={{
          // marginBottom: 40,
          textAlign: "center",
          color: colors.secondary,
          fontSize: 40,
        }}
      >
        {text}
      </h1>
      <div style={{ marginBottom: 40 }}>
        <Lottie options={defaultOptions} height={10} width={200} />
      </div>
    </>
  );
}

export default Heading;
