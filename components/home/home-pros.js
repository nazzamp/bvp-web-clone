import Image from "next/image";
import React from "react";
import ViewMoreButton from "../view-more-button/view-more-button";

const HomePros = () => {
  const FadeBox = ({ title, desc }) => {
    return (
      <div className="flex flex-col text-white font-bold gap-2 bg-gradient-to-b from-[#1F365D00] to-[#23496A] absolute z-10 bottom-0 pb-8 pl-12 pt-20 w-full">
        <p className="text-lg text-[#EAFBFF]">{desc}</p>
        <p className="text-3xl">{title}</p>
      </div>
    );
  };

  return (
    <div className="w-full mt-28">
      <div className="flex justify-between">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <Image
            src={"/svgs/medal.svg"}
            alt="idea icon"
            width={32}
            height={32}
          />
          <h2 className="uppercase text-center font-bold text-3xl bg-gradient-to-l from-[#1879BC] to-[#0D7E8D] bg-clip-text text-transparent">
            đội ngũ chuyên gia
          </h2>
        </div>
        <ViewMoreButton theme="light" title="Xem thêm" />
      </div>
      <div className="grid grid-cols-2 mt-7 gap-3">
        <div className="h-[580px] relative rounded-l-2xl rounded-r-lg overflow-hidden">
          <Image
            src={"/images/giam-doc.png"}
            alt="anh giam doc"
            fill
            style={{ objectFit: "cover" }}
          />
          <FadeBox desc={"Giám đốc Bệnh viện"} title="BSCK1 Hoàng Văn Hy" />
        </div>
        <div className="flex flex-col h-[580px] gap-3">
          <div className="flex flex-1 relative rounded-r-2xl rounded-l-lg overflow-hidden">
            <Image
              src={"/images/pho-giam-doc-1.png"}
              alt="anh giam doc"
              fill
              style={{ objectFit: "cover" }}
            />
            <FadeBox
              desc={"Phó Giám đốc bệnh viện"}
              title="BSCK1 Trần Văn Dũng"
            />
          </div>
          <div className="flex flex-1 relative rounded-r-2xl rounded-l-lg overflow-hidden">
            <Image
              src={"/images/pho-giam-doc-2.png"}
              alt="anh giam doc"
              fill
              style={{ objectFit: "cover" }}
            />
            <FadeBox
              desc={"Phó Giám đốc bệnh viện"}
              title="BSCK1 Vũ Văn Thông"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePros;
