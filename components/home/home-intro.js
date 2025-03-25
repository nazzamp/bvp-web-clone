import Image from "next/image";
import React from "react";
import ViewMoreButton from "../view-more-button/view-more-button";

const HomeIntro = () => {
  return (
    <div className="grid grid-cols-2 mt-40 w-full gap-4">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1">
          <Image
            src={"/svgs/idea.svg"}
            alt="idea icon"
            width={24}
            height={24}
          />
          <span className="uppercase text-lg font-bold text-[#3D779F] mb-2">
            giới thiệu
          </span>
        </div>
        <h2 className="font-bold text-3xl bg-gradient-to-l from-[#1879BC] to-[#0D7E8D] bg-clip-text text-transparent mt-2 leading-[48px]">
          BỆNH VIỆN PHỔI QUẢNG NINH:
        </h2>
        <h2 className="font-bold text-3xl bg-gradient-to-l from-[#1879BC] to-[#21B29F] bg-clip-text text-transparent mt-1 leading-[40px]">
          NƠI TRẢ LẠI NHỮNG HƠI THỞ KHOẺ MẠNH
        </h2>
        <p className="mt-3 mb-8 text-[#3D779F] text-lg max-w-[600px] font-medium">
          Bệnh viện Phổi Quảng Ninh sẽ trở thành một bệnh viện chuyên sâu các
          bệnh về phổi có chất lượng cao. Đồng thời, trở thành trung tâm nghiên
          cứu, giảng dạy các bệnh về phổi; phối hợp với các bệnh viện...
        </p>
        <ViewMoreButton title="Xem thêm" />
      </div>
      <div className="h-[400px] relative rounded-2xl overflow-hidden">
        <Image
          src={"/images/home-intro.png"}
          alt="doctor"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default HomeIntro;
