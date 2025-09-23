"use client";

import Image from "next/image";
import { motion } from "motion/react";

const HomeMap = () => {
  return (
    <div className="mt-24 md:mt-48 w-full rounded-3xl flex flex-col items-center md:mb-32 mb-16">
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
          <Image src={"/svgs/map.svg"} alt="idea icon" width={24} height={24} />
          <span className="uppercase text-lg font-bold text-[#273C8C]">
            Bản đồ
          </span>
        </div>
        <h2 className="text-center font-bold text-3xl md:text-4xl bg-gradient-to-l from-[#273C8C] to-[#273C8C] bg-clip-text text-transparent max-w-[560px]">
          Vị trí bệnh viện
        </h2>
      </motion.div>
      <div
        className="mt-8"
        style={{
          overflow: "hidden",
          resize: "none",
          maxWidth: "100%",
          width: "1000px",
          height: "400px",
          borderRadius: "16px",
        }}
      >
        <div
          id="gmap-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=benh+vien+phoi+quang+ninh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            title="Google Map"
          ></iframe>
        </div>
        <style>
          {`
                    #gmap-canvas img {
                        max-width: none !important;
                        background: none !important;
                        font-size: inherit;
                        font-weight: inherit;
                    }
                `}
        </style>
      </div>
    </div>
  );
};

export default HomeMap;
