import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const News = ({
  id,
  title = "",
  image = "",
  coverHeight = 240,
  textOnImage = false,
  textSize = 16,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/news/" + id);
  };

  return (
    <div
      className="flex flex-col relative cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="flex relative rounded-2xl overflow-hidden"
        style={{ height: coverHeight }}
      >
        <Image
          src={image}
          alt="logo"
          fill
          style={{ objectFit: "cover" }}
          className="hover:scale-115 transition-all duration-500"
        />
      </div>
      {textOnImage ? (
        <div className="h-24 bg-gradient-to-b from-[#00000010] to-[#00000099] absolute bottom-0 z-20 w-full rounded-b-2xl px-6 py-2">
          <p
            className="line-clamp-2 text-white font-bold hover:underline"
            style={{ fontSize: textSize }}
          >
            {title}
          </p>
        </div>
      ) : (
        <p
          className="line-clamp-2 font-bold mt-2"
          style={{ fontSize: textSize }}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default News;
