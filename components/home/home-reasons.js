import Image from "next/image";
import React from "react";

const DATA = [
  [
    {
      title: "Hỗ trợ 24/7 với đường dây nóng",
      image: "/images/reason-1.png",
    },
    {
      title: "Đội ngũ bác sĩ chất lượng cao",
      image: "/images/reason-2.png",
    },
  ],
  [
    {
      title: "Kỹ thuật chuyên sâu",
      image: "/images/reason-3.png",
    },
    {
      title: "Trang thiết bị hiện đại",
      image: "/images/reason-4.png",
    },
  ],
];

const HomeReasons = () => {
  const FadeBox = ({ title }) => {
    return (
      <div className="flex flex-col text-white font-semibold gap-2 bg-gradient-to-b from-[#1F365D00] to-[#415661] absolute z-10 bottom-0 pb-8 pl-12 pt-20 w-full">
        <p className="text-2xl">{title}</p>
      </div>
    );
  };

  const ReasonGradCard = ({ data, rowIndex, index }) => {
    return (
      <div
        className={
          "h-[300px] relative rounded-l-2xl rounded-r-lg overflow-hidden " +
          (rowIndex % 2 === 0
            ? index % 2 === 0
              ? "col-span-3"
              : "col-span-2"
            : index % 2 === 0
            ? "col-span-2"
            : "col-span-3")
        }
      >
        <Image
          src={data?.image}
          alt="anh giam doc"
          fill
          style={{ objectFit: "cover" }}
        />
        <FadeBox title={data?.title} />
      </div>
    );
  };

  const renderRow = (item, rowIndex) => {
    return (
      <div key={rowIndex} className="grid grid-cols-5 w-full gap-2">
        {item.map((item, index) => (
          <ReasonGradCard
            data={item}
            key={index}
            rowIndex={rowIndex}
            index={index}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mt-48 w-full rounded-3xl flex flex-col items-center">
      <div className="flex items-center gap-1 mb-2 justify-center">
        <Image src={"/svgs/star.svg"} alt="idea icon" width={24} height={24} />
        <span className="uppercase text-lg font-bold text-[#3D779F]">
          ƯU THẾ
        </span>
      </div>
      <h2 className="text-center font-bold text-3xl bg-gradient-to-l from-[#1879BC] to-[#0D7E8D] bg-clip-text text-transparent max-w-[560px] leading-[48px]">
        LÝ DO CHỌN BỆNH VIỆN PHỔI QUẢNG NINH LÀ NƠI KHÁM VÀ CHỮA BỆNH
      </h2>
      <div className="w-full flex flex-col gap-2 mt-12">
        {DATA.map(renderRow)}
      </div>
    </div>
  );
};

export default HomeReasons;
