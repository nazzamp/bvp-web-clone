"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const HomeIntro = () => {
  return (
    <div className="mt-24 md:mt-40 w-full gap-4 flex flex-col items-center relative z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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

          <h2 className="font-bold text-3xl md:text-4xl bg-gradient-to-l text-[#273C8C] mt-2 md:leading-[48px] text-center">
            Tìm hiểu về <br /> Bệnh viện <br className="md:hidden block" /> Phổi
            Quảng Ninh
          </h2>
          <p className="mt-3 text-[#4B5478] text-base max-w-[600px] font-medium text-center">
            Bệnh viện Phổi tỉnh Quảng Ninh là cơ sở y tế hàng đầu trong việc
            chẩn đoán và điều trị các bệnh về đường hô hấp. Được đầu tư mạnh mẽ
            từ chính quyền tỉnh và Tập đoàn Công nghiệp Than – Khoáng sản Việt
            Nam, bệnh viện đã mở rộng và hiện đại hóa trang thiết bị, nâng cao
            chất lượng dịch vụ y tế.
          </p>
        </div>
      </motion.div>
      <div className="w-full relative overflow-hidden mt-12">
        <div className="md:grid grid-cols-4 gap-3 flex flex-col">
          <div className="md:col-span-3 md:grid grid-cols-3 gap-3 flex flex-col">
            <div className="md:col-span-2 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-1.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="md:col-span-1 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-2.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="md:col-span-1 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-3.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="md:col-span-2 h-[280px] relative rounded-lg overflow-hidden">
              <Image
                src={"/images/intro-4.png"}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:col-span-1 h-full relative rounded-lg overflow-hidden">
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
