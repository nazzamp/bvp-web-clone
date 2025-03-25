"use client";

import React, { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";

const FloatButton = () => {
  // const [isShowFloatButton, setIsShowFloatButton] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsShowFloatButton(window.scrollY > 50);
  //     console.log(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <button className="cta-button flex flex-col items-center gap-1">
      <div className="flex items-center gap-2">
        <BiSolidPhoneCall className="text-base" />
        <span className="text-sm">Tư vấn ngay</span>
      </div>
      <span className="text-base">02033825101</span>
    </button>
  );
};

export default FloatButton;
