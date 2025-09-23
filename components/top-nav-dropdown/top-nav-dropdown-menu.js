"use client";

import { useRouter } from "nextjs-toploader/app";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const TopNavDropdownMenu = ({ title, field, setIsOpenMenu }) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleClick = (id) => () => {
    router.push("/departments/" + id);
    setIsOpenMenu(false);
  };

  const renderField = (item, index) => {
    return (
      <a
        key={index}
        onClick={handleClick(item.documentId)}
        className="block px-6 py-3 hover:bg-[#1F8FFF] text-sm border-t-[1px] border-y-[#5e92c68a]"
      >
        <span className="font-medium text-white">{item?.label}</span>
      </a>
    );
  };

  return (
    <>
      <div
        className="flex items-center gap-1 text-primaryBlue cursor-pointer relative rounded-b-2xl"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="font-bold text-[#273C8C]">{title}</p>
        <FaChevronDown className="text-[#273C8C]" />
      </div>
      <div
        className="bg-[#005EBD] overflow-hidden flex-col rounded-2xl"
        style={{
          display: isActive ? "flex" : "none",
        }}
      >
        {field?.map(renderField)}
      </div>
    </>
  );
};

export default TopNavDropdownMenu;
