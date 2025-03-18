"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const TopNavDropdown = ({ title, field }) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  console.log({ isActive });

  const handleMouseOver = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleMouseOut = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const handleClick = (id) => () => {
    router.push("/departments/" + id);
  };

  const renderField = (item, index) => {
    return (
      <a
        key={index}
        onClick={handleClick(item.documentId)}
        className="block px-6 py-1 hover:bg-[#1F8FFF] text-sm border-t-[1px] border-y-[#5e92c68a]"
      >
        <span className="font-medium text-white">{item?.label}</span>
      </a>
    );
  };

  return (
    <div
      className="flex items-center gap-1 text-primaryBlue cursor-pointer relative h-[72px] rounded-b-2xl"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <p className="uppercase font-bold text-white">{title}</p>
      <FaChevronDown className="text-white" />
      <div
        className="transition-all absolute top-[72px] bg-[#005EBD] w-[400px] rounded-b-2xl overflow-hidden z-50 py-2"
        style={{
          visibility: isActive ? "visible" : "hidden",
          opacity: isActive ? 1 : 0,
        }}
      >
        {field?.map(renderField)}
      </div>
    </div>
  );
};

export default TopNavDropdown;
