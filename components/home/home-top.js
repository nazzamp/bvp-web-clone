import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HomeTop = () => {
  return (
    <div className="w-full bg-[#F4F8FE] flex justify-center relative rounded-b-4xl overflow-hidden">
      <div className="w-full container h-[800px]">
        <div className="w-full mt-[180px] relative z-0">
          <p className="text-[#273C8C] text-5xl font-bold leading-tight">
            Nơi trả lại những
            <br />
            hơi thở khoẻ mạnh
          </p>
          <p className="text-[#273C8C] text-sm leading-normal mt-5 max-w-[480px] mb-8">
            Bệnh viện Phổi Quảng Ninh mang sứ mệnh chữa trị, tiếp tục nâng cao
            chất lượng khám, chữa bệnh, các dịch vụ y tế chất lượng cao, hội
            chẩn ca bệnh từ xa với tuyến trên, tuyến dưới, phát triển chuyên môn
            trong chẩn đoán, điều trị cho bệnh nhân hô hấp
          </p>
          <Button className="mr-2 bg-[#273C8C] hover:bg-[#697ec8] text-white font-semibold rounded-full px-6 py-2">
            Liên hệ với bệnh viện
          </Button>
          <Button
            className={
              "bg-white font-semibold rounded-full text-[#273C8C]  px-6 py-2"
            }
            variant={"secondary"}
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            }}
          >
            Hỏi đáp
          </Button>
          <Image
            src="/images/lung-3d.png"
            alt="Home Top Icon"
            width={148}
            height={148}
            className="mt-12 z-50 relative"
          />
          <div className="rounded-full bg-[#EDF4FF] w-[560px] h-[560px] absolute bottom-[-360px] left-[-240px] -z-10 animate-pulse" />
          <div className="rounded-full bg-[#E5EFFF] w-[480px] h-[480px] absolute bottom-[-320px] left-[-200px] -z-10 animate-pulse" />
        </div>
        <Image
          src="/images/home-top-image.png"
          alt="Home Top Slide"
          width={800}
          height={800}
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default HomeTop;
