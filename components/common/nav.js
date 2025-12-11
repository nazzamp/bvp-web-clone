"use client";

import Logo from "../logo/logo";
import TopNavDropdown from "../top-nav-dropdown/top-nav-dropdown";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import TopNavDropdownMenu from "../top-nav-dropdown/top-nav-dropdown-menu";
import GradTopButton from "./grad-top-button/grad-top-button";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const DATA = [
  {
    title: "Giới thiệu",
    link: "",
    field: [
      {
        label: "Lịch sử hình thành",
        documentId: "hxtn8sctebz2q7ucy0jkow29",
      },
      {
        label: "Chức năng nhiệm vụ",
        documentId: "hxtn8sctebz2q7ucy0jkow29",
      },
      {
        label: "Ban giám đốc",
        documentId: "sqkfp8nx50l83zt2mhl18agw",
      },
      {
        label: "Khoa Chẩn đoán hình ảnh",
        documentId: "e7ejgyrpgc9ebsaxhnji3las",
      },
      {
        label: "Khoa Dinh dưỡng",
        documentId: "op2vlrzmgy1x0uy5yjhkcy32",
      },
      {
        label: "Khoa Dược",
        documentId: "iwz6gk24n1gk2vpy4si2tgaj",
      },
      {
        label: "Khoa Hồi sức cấp cứu",
        documentId: "n4ix00fzaljfqbpmvgwtnits",
      },
      {
        label: "Khoa kiểm soát nhiễm khuẩn",
        documentId: "b7fmh5lz4d0lvtwpjvnb6xqm",
      },
      {
        label: "Khoa khám bệnh",
        documentId: "dd5mairry9x1z3o8ho1q1ojb",
      },
      {
        label: "Khoa Nội 1",
        documentId: "y5ledrzbgz2dq630akoj6zv6",
      },
      {
        label: "Khoa Nội 2",
        documentId: "agb6u5uwdfixko9r0jhk8des",
      },
      {
        label: "Khoa Nội 3",
        documentId: "qook1772ppanmsk6zwnrhyek",
      },
      {
        label: "Khoa Phục hồi chức năng - Vật lý trị liệu",
        documentId: "dsakontoawn1x7h9veqsxmua",
      },
      {
        label: "Khoa xét nghiệm",
        documentId: "cpvudth3ds93dj74bthamrum",
      },
      {
        label: "Phòng Chỉ đạo chuyên khoa",
        documentId: "nepn58b0n5xetqjba00amw53",
      },
      {
        label: "Phòng Điều dưỡng",
        documentId: "qqtgrnqj86pq2a51xar5nfg7 ",
      },
      {
        label: "Phòng Kế hoạch tổng hợp",
        documentId: "xuxgxme7khi7lbpxu3675tw2",
      },
      {
        label: "Phòng Tài chính kế toán",
        documentId: "vcrum5tukfr8vgj7kb8ht84w",
      },
      {
        label: "Phòng Tổ chức hành chính",
        documentId: "o3r3p0hnek0gfkt4vr9cbn1c",
      },
    ],
  },
  {
    title: "Tin tức & sự kiện",
    link: "/news",
  },
  {
    title: "Y tế Quảng Ninh",
    link: "/quang-ninh-medicals",
  },
  {
    title: "Sức khoẻ cộng đồng",
    link: "/community-healths",
  },
  {
    title: "Thông báo",
    link: "/announcements",
  },
];

const TopNav = () => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { scrollY } = useScroll();
  const [scrollOffset, setScrollOffset] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrollOffset(scrollY.getPrevious());
  });

  const renderItem = (item, index) => {
    if (item?.field && !isOpenMenu) {
      return (
        <TopNavDropdown title={item?.title} key={index} field={item?.field} />
      );
    }
    if (item?.field) {
      return (
        <TopNavDropdownMenu
          title={item?.title}
          key={index}
          field={item?.field}
          setIsOpenMenu={setIsOpenMenu}
        />
      );
    }
    return (
      <Link
        href={item.link}
        key={index}
        onClick={() => {
          setIsOpenMenu(false);
        }}
      >
        <span className="font-bold text-[#273C8C]">{item.title}</span>
      </Link>
    );
  };

  const handleClickLogo = () => {
    router.push("/");
  };

  const handleClick = () => {
    // router.push("https://22044.byt.vn/kcb/dang-ky-kham");
    window.open("https://22044.byt.vn/kcb/dang-ky-kham", "_blank");
    setIsOpenMenu(false);
  };

  return (
    <>
      <motion.div
        suppressHydrationWarning
        className="hidden md:flex w-full justify-center fixed top-4 z-30 transition-all duration-700 h-[88xp]"
        style={{
          background: scrollOffset > 100 ? "white" : "transparent",
          boxShadow:
            scrollOffset > 100
              ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              : "none",
          transform:
            scrollOffset > 100 ? `translateY(-16px)` : `translateY(0px)`,
        }}
      >
        <motion.div
          className="flex items-center justify-between bg-white rounded-full container"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            background: "white",
            boxShadow:
              scrollOffset > 100
                ? "none"
                : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex items-center gap-8">
            <div onClick={handleClickLogo} className="cursor-pointer">
              <Logo theme="dark" />
            </div>
            <div className="flex flex-row items-center gap-6">
              {DATA.map(renderItem)}
            </div>
          </div>
          <div>
            <GradTopButton title="Đăng ký khám bệnh" onClick={handleClick} />
          </div>
        </motion.div>
      </motion.div>
      <div className="flex md:hidden w-full justify-center fixed top-4 z-30 px-4 transition-all duration-500">
        <div className="flex items-center justify-between container bg-white rounded-full shadow-md py-1">
          <div className="flex items-center gap-8">
            <div onClick={handleClickLogo} className="cursor-pointer">
              <Logo size={32} theme="dark" isShowText={false} />
            </div>
          </div>
          <div>
            {!isOpenMenu ? (
              <div
                onClick={() => setIsOpenMenu(true)}
                className="cursor-pointer"
              >
                <FiMenu className="text-[#273C8C] text-xl" />
              </div>
            ) : (
              <div className="absolute -top-4 left-0 w-screen h-screen bg-white flex justify-between p-6 overflow-y-scroll">
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-6">
                    {DATA.map(renderItem)}
                  </div>
                  <GradTopButton
                    title="Đăng ký khám bệnh"
                    onClick={handleClick}
                  />
                </div>
                <IoMdClose
                  onClick={() => setIsOpenMenu(false)}
                  className="text-[#273C8C] text-xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
