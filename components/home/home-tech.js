"use client";

import Image from "next/image";
import HomeTechItem from "./home-tech-item";
import { motion } from "motion/react";
import useIsMobile from "@/hooks/useIsMobile";

const DATA = [
  {
    title: "Soi tìm trực khuẩn lao (AFB)",
    image: "/images/tech-1.png",
  },
  {
    title: "Nuôi cấy vi khuẩn lao",
    image: "/images/tech-2.png",
  },
  {
    title: "Kỹ thuật Gen-Xpert phát hiện lao kháng thuốc trong 2 giờ",
    image: "/images/tech-3.png",
  },
];

const HomeTech = () => {
  const isMobile = useIsMobile();

  return (
    <div className="mt-16 md:mt-40">
      <div className="md:grid grid-cols-2">
        <motion.div
          className="col-span-1 flex flex-col justify-center"
          initial={{ opacity: 0, transform: "translateY(-32px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="font-bold text-3xl md:text-4xl bg-gradient-to-l text-[#273C8C] mt-2 leading-[48px]">
            {isMobile ? (
              <>Kỹ thuật chuyên sâu và chẩn đoán sớm</>
            ) : (
              <>
                Kỹ thuật chuyên sâu <br /> & chẩn đoán sớm
              </>
            )}
          </h2>
          <p className="mt-3 text-[#4B5478] text-base max-w-[480px] font-medium">
            Chúng tôi phát triển các kỹ thuật tiên tiến trong việc chẩn đoán và
            điều trị bệnh lao, bao gồm
          </p>
        </motion.div>
        <motion.div
          className="col-span-1 relative md:flex justify-center hidden"
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        >
          <Image
            src={"/images/lab-01.png"}
            alt="doctor"
            width={276}
            height={260}
            className="relative z-10"
          />
          <div className="rounded-full bg-[#EDF4FF] w-[520px] h-[520px] absolute bottom-[-320px] left-[0px] z-0 animate-pulse lg:block hidden" />
          <div className="rounded-full bg-[#E5EFFF] w-[400px] h-[400px] absolute bottom-[-320px] left-[0px] z-0 animate-pulse lg:block hidden" />
        </motion.div>
      </div>
      <div className="w-full flex flex-col md:grid grid-cols-3 gap-5 mt-12 mb-16 relative z-10">
        {DATA.map((item, index) => (
          <HomeTechItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeTech;
