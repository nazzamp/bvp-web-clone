import React from "react";
import "./grad-ani-button.css";

const GradAniButton = ({ title = "demo", ...prop }) => {
  return (
    <button className="Btn" {...prop}>
      {title}
    </button>
  );
};

export default GradAniButton;
