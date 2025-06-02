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
            src={"/images/pros.png"}
            alt="idea icon"
            width={64}
            height={64}
          />
          <h2 className="text-center font-bold text-3xl bg-gradient-to-l text-[#273C8C]">
            Đội ngũ chuyên gia
          </h2>
        </div>
        <ViewMoreButton theme="light" title="Xem thêm" />
      </div>
      <div className="grid grid-cols-2 mt-4 gap-3">
        <div
          className="h-[580px] relative rounded-l-2xl rounded-r-lg overflow-hidden"
          style={{ background: "url('/images/pro-bg.png')" }}
        >
          <Image
            src={"/images/hoang-van-hy.png"}
            alt="anh giam doc"
            width={600}
            height={600}
            className="absolute bottom-0 right-0 left-0 m-auto"
          />
          <FadeBox desc={"Giám đốc Bệnh viện"} title="BSCK1 Hoàng Văn Hy" />
        </div>
        <div className="flex flex-col h-[580px] gap-3">
          <div
            className="flex flex-1 relative rounded-r-2xl rounded-l-lg overflow-hidden justify-end"
            style={{ background: "url('/images/pro-bg.png')" }}
          >
            <Image
              src={"/images/tran-van-dung.png"}
              alt="anh giam doc"
              width={300}
              height={300}
            />
            <FadeBox
              desc={"Phó Giám đốc bệnh viện"}
              title="BSCK1 Trần Văn Dũng"
            />
          </div>
          <div
            className="flex flex-1 relative rounded-r-2xl rounded-l-lg overflow-hidden justify-end"
            style={{ background: "url('/images/pro-bg.png')" }}
          >
            <Image
              src={"/images/vu-van-thong.png"}
              alt="anh giam doc"
              width={300}
              height={300}
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
