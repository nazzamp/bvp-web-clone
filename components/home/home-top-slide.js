"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./home-top-slide-style.css";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { GoArrowRight } from "react-icons/go";
import { DotButton, useDotButton } from "./home-top-slide-dot";

const DATA = [
  {
    title: "Bệnh viện phổi Quảng Ninh, diện mạo mới, sứ mệnh mới!",
    image: "/images/slide-0.jpg",
  },
  {
    title: "Vì một môi trường làm việc xanh - sạch- đẹp.",
    image: "/images/slide-1.jpg",
  },
  {
    title:
      "HỘI NGHỊ CÁN BỘ, VIÊN CHỨC, NGƯỜI LAO ĐỘNG BỆNH VIỆN PHỔI QUẢNG NINH 2024",
    image: "/images/slide-2.jpg",
  },
  {
    title: "Hưởng ứng Ngày Quốc tế phòng, chống dịch bệnh (27/12) năm 2024",
    image: "/images/slide-3.jpg",
  },
  {
    title: "THẨM ĐỊNH HỒ SƠ BỆNH ÁN ĐIỆN TỬ TẠI BỆNH VIỆN PHỔI QUẢNG NINH",
    image: "/images/slide-4.jpg",
  },
];

const HomeTopSlide = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const renderSlideImage = (item, index) => {
    return (
      <div
        className="embla__slide h-[640px] relative cursor-pointer"
        key={index}
      >
        <Image
          src={item?.image}
          alt="cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  };

  return (
    <div
      className="embla rounded-b-3xl overflow-hidden relative"
      ref={emblaRef}
    >
      <div className="embla__container">{DATA.map(renderSlideImage)}</div>
      <div className="gap-4 min-h-[180px] flex flex-col items-center text-center border-[#F3FBFF] border-8 rounded-t-2xl absolute mx-auto left-0 right-0 bottom-0 w-[560px] bg-gradient-to-b from-[#DCF1FF] to-[#F3FBFF] px-8 pt-6">
        <p className="uppercase text-2xl font-bold text-[#176FB2] select-none leading-normal">
          {DATA?.[selectedIndex]?.title}
        </p>
        <div className="flex items-center gap-1 text-[#156AA4]">
          <span className="font-medium select-none">Xem thêm</span>
          <GoArrowRight />
        </div>
        <div className="embla__dots gap-1 mt-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <Image
          className="absolute -bottom-2 -left-8"
          src={"/svgs/mask-corner.svg"}
          alt="corner"
          width={24}
          height={24}
        />
        <Image
          className="absolute -bottom-2 -right-8 scale-x-[-1]"
          src={"/svgs/mask-corner.svg"}
          alt="corner"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default HomeTopSlide;
