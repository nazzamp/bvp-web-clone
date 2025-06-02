import Image from "next/image";
import React from "react";
import ViewMoreButton from "../view-more-button/view-more-button";

const HomeIntro = () => {
  return (
    <div className="mt-40 w-full gap-4 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-1">
          <Image
            src={"/svgs/idea.svg"}
            alt="idea icon"
            width={24}
            height={24}
          />
          <span className="uppercase text-lg font-bold text-[#273C8C]">
            giới thiệu
          </span>
        </div>
        <h2 className="font-bold text-4xl bg-gradient-to-l text-[#273C8C] mt-2 leading-[48px] text-center">
          Tìm hiểu về <br /> Bệnh viện Phổi Quảng Ninh
        </h2>
        <p className="mt-3 text-[#4B5478] text-base max-w-[600px] font-medium text-center">
          Bệnh viện Phổi tỉnh Quảng Ninh là cơ sở y tế hàng đầu trong việc chẩn
          đoán và điều trị các bệnh về đường hô hấp. Được đầu tư mạnh mẽ từ
          chính quyền tỉnh và Tập đoàn Công nghiệp Than – Khoáng sản Việt Nam,
          bệnh viện đã mở rộng và hiện đại hóa trang thiết bị, nâng cao chất
          lượng dịch vụ y tế.
        </p>
      </div>
      <div className="w-full relative overflow-hidden mt-12">
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-3 grid grid-cols-3 gap-3">
            <div className="col-span-2 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-1.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-span-1 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-2.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-span-1 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-3.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-span-2 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-4.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 h-full relative rounded-lg overflow-hidden">
            <Image
              src={"/images/intro-5.png"}
              alt="doctor"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
