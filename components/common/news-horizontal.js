import React from "react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { LuClock } from "react-icons/lu";
import useIsMobile from "@/hooks/useIsMobile";

const NewsHorizontal = ({
  id,
  title = "",
  image = "",
  coverHeight = 240,
  textOnImage = false,
  textSize = 16,
  time,
  path = "news",
}) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleClick = () => {
    router.push("/" + path + "/" + id);
  };

  return (
    <div
      className="flex flex-col md:flex-row relative cursor-pointer gap-4 md:mb-0 mb-8"
      onClick={handleClick}
    >
      <div
        className="flex relative rounded-2xl overflow-hidden shrink-0"
        style={{ height: coverHeight, width: isMobile ? "100%" : coverHeight }}
      >
        <Image
          src={image}
          alt="logo"
          fill
          style={{ objectFit: "cover" }}
          className="hover:scale-115 transition-all duration-500"
        />
      </div>
      <div>
        <p
          className="line-clamp-2 font-bold mt-2"
          style={{ fontSize: textSize }}
        >
          {title}
        </p>
        <div className="flex items-center gap-2 mt-2 text-zinc-600">
          <LuClock />
          <p className="text-zinc-600">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsHorizontal;
