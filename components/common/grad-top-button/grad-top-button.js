import React from "react";
import "./grad-top-button.css";

const GradTopButton = ({ title = "demo", ...prop }) => {
  return (
    <button className={"btn-donate"} {...prop}>
      {title}
    </button>
  );
};

export default GradTopButton;
