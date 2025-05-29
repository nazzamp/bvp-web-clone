"use client";

import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=z-hnzu0jA_Y&ab_channel=NamMaiHoang"
      loop
      width={"100%"}
      height={"100%"}
    />
  );
};

export default Video;
