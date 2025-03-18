import Image from "next/image";
import React from "react";

const Logo = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image src={"/images/logo.png"} width={64} height={64} alt="logo" />
      <p
        className={
          "uppercase font-extrabold leading-tight " +
          (isDark ? "text-primaryBlue" : "text-white")
        }
      >
        Bệnh viện phổi
        <br />
        Quảng Ninh
      </p>
    </div>
  );
};

export default Logo;
