"use client";

import Image from "next/image";
import HomeFAQItem from "./home-faq-item";
import { motion } from "motion/react";

const DATA = [
  {
    title: "Bệnh viện Phổi Quảng Ninh được thành lập khi nào?",
    desc: "Bệnh viện Phổi Quảng Ninh được đổi tên từ Bệnh viện Lao và Phổi Quảng Ninh vào ngày 9/3/2020, nhằm phát triển thành một bệnh viện chuyên sâu về các bệnh phổi.",
  },
  {
    title: "Bệnh viện có quy mô và cơ sở vật chất như thế nào?",
    desc: "Bệnh viện có quy mô 200 giường bệnh, thu hút trên 19.000 lượt người đến khám bệnh mỗi năm. Trong năm 2022, bệnh viện đã được đầu tư nâng cấp, mở rộng với tổng vốn đầu tư 546 tỷ đồng, nâng diện tích từ 2,52ha lên 3,86ha và quy mô từ 200 giường lên 330 giường bệnh.",
  },
  {
    title: "Bệnh viện cung cấp những dịch vụ y tế nào?",
    desc: "Bệnh viện chuyên khám, phát hiện, điều trị và quản lý bệnh lao cùng các bệnh hô hấp khác. Ngoài ra, bệnh viện còn triển khai các kỹ thuật mới như thở máy không xâm nhập, nội soi khí phế quản ống mềm lấy dị vật, sinh thiết xuyên thành ngực dưới hướng dẫn của siêu âm, xét nghiệm miễn dịch phát hiện ung thư, và điều trị lao kháng thuốc ngắn hạn 9 tháng.",
  },
  {
    title: "Bệnh viện có đội ngũ nhân lực như thế nào?",
    desc: "Bệnh viện có đội ngũ nhân lực như thế nào? Bệnh viện hiện có 40 bác sĩ, trong đó có 1 tiến sĩ, 1 bác sĩ chuyên khoa II, 16 bác sĩ chuyên khoa I và các bác sĩ đa khoa khác. Bệnh viện luôn chú trọng đào tạo và thu hút nhân lực chất lượng cao để nâng cao chất lượng khám chữa bệnh.",
  },
  {
    title: "Bệnh viện có hợp tác với các đơn vị y tế khác không?",
    desc: "Bệnh viện đẩy mạnh hợp tác chuyển giao kỹ thuật chuyên môn với các bệnh viện và trung tâm y tế khác nhằm nâng cao chất lượng dịch vụ và đáp ứng nhu cầu khám chữa bệnh của người dân.",
  },
  {
    title: "Làm thế nào để liên hệ với Bệnh viện Phổi Quảng Ninh?",
    desc: "Bạn có thể liên hệ với Bệnh viện Phổi Quảng Ninh qua trang Facebook chính thức",
  },
];

const HomeFAQ = () => {
  const renderItem = (item, index) => {
    return <HomeFAQItem data={item} key={index} />;
  };

  return (
    <div className="mt-48 w-full rounded-3xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex items-center gap-1 mb-2 justify-center">
          <Image
            src={"/svgs/info.svg"}
            alt="idea icon"
            width={24}
            height={24}
          />
          <span className="uppercase text-lg font-bold text-[#273C8C]">
            FAQ
          </span>
        </div>
        <h2 className="text-center font-bold text-4xl text-[#273C8C] max-w-[560px]">
          Câu hỏi thường gặp
        </h2>
      </motion.div>
      <div className="w-[800px] flex flex-col items-center gap-3 mt-12 relative z-10">
        {DATA.map(renderItem)}
        <motion.div
          className="absolute -left-28 -z-10 top-12 w-[367px] h-[367px] opacity-50"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          style={{ transformOrigin: "center" }}
        >
          <Image
            src={"/images/half-circle-grad.png"}
            alt="half grad circle"
            width={144}
            height={367}
          />
        </motion.div>
        <motion.div
          className="absolute -right-28 -z-10 bottom-12 scale-x-[-1] scale-y-[-1] w-[367px] h-[367px] opacity-50"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          style={{ transformOrigin: "center" }}
        >
          <Image
            src={"/images/half-circle-grad.png"}
            alt="half grad circle"
            width={144}
            height={367}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeFAQ;
