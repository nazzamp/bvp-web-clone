"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const HomeFAQItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickItem = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    if (isOpen) {
      return <FiMinus size={24} />;
    }
    return <FiPlus size={24} />;
  };

  return (
    <div className="w-full" onClick={handleClickItem}>
      <div className="text-primaryBlue bg-white rounded-2xl px-10 py-6 flex justify-between cursor-pointer w-full">
        <p className="text-xl font-medium">{data?.title}</p>
        {renderIcon()}
      </div>
      <div
        className="text-primaryBlue bg-[#EAF6FC] rounded-2xl flex justify-between cursor-pointer w-full mt-2 overflow-hidden transition-all"
        style={{
          height: isOpen ? "fit-content" : "0px",
          padding: isOpen ? "40px" : "0px",
          paddingTop: isOpen ? "20px" : "0px",
          paddingBottom: isOpen ? "20px" : "0px",
          marginBottom: isOpen ? "20px" : "0px",
        }}
      >
        <p className="text-lg">{data?.desc}</p>
      </div>
    </div>
  );
};

export default HomeFAQItem;
