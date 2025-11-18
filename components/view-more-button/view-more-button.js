import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const ViewMoreButton = ({ title = "", theme = "dark", ...props }) => {
  const isDarkTheme = theme === "dark";

  return (
    <button
      className="flex items-center py-3 px-5 rounded-full gap-2 w-fit h-fit cursor-pointer"
      style={{ background: isDarkTheme ? "#273C8C" : "#E6EEFF" }}
      {...props}
    >
      <span
        className="font-bold text-base"
        style={{ color: isDarkTheme ? "#ffffff" : "#273C8C" }}
      >
        {title}
      </span>
      <FaArrowTurnUp
        size={16}
        style={{ color: isDarkTheme ? "#ffffff" : "#273C8C" }}
        className="md:block hidden"
      />
    </button>
  );
};

export default ViewMoreButton;
