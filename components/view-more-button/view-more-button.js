import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const ViewMoreButton = ({ title = "", theme = "dark" }) => {
  const isDarkTheme = theme === "dark";

  return (
    <button
      className="flex items-center py-3 px-5 rounded-full gap-2 w-fit"
      style={{ background: isDarkTheme ? "#0C5D94" : "#ffffff" }}
    >
      <span
        className="font-bold text-base"
        style={{ color: isDarkTheme ? "#ffffff" : "#0C5D94" }}
      >
        {title}
      </span>
      <FaArrowTurnUp
        size={16}
        style={{ color: isDarkTheme ? "#ffffff" : "#0C5D94" }}
      />
    </button>
  );
};

export default ViewMoreButton;
