import Image from "next/image";
import React from "react";

const Logo = ({ theme = "dark", size = 64, isShowText = true }) => {
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image src={"/images/logo.png"} width={size} height={size} alt="logo" />
      {isShowText && (
        <p
          className={
            "text-sm uppercase font-extrabold leading-tight " +
            (isDark ? "text-[#273C8C]" : "text-white")
          }
        >
          Bệnh viện phổi
          <br />
          Quảng Ninh
        </p>
      )}
    </div>
  );
};

export default Logo;
