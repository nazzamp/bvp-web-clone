"use client";

import Logo from "../logo/logo";
import TopNavDropdown from "../top-nav-dropdown/top-nav-dropdown";
import GradAniButton from "../grad-ani-button/grad-ani-button";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

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

  const renderItem = (item, index) => {
    if (item?.field) {
      return (
        <TopNavDropdown title={item?.title} key={index} field={item?.field} />
      );
    }
    return (
      <Link href={item.link} key={index}>
        <span className="font-bold text-[#273C8C]">{item.title}</span>
      </Link>
    );
  };

  const handleClickLogo = () => {
    router.push("/");
  };

  const handleClick = () => {
    router.push("/appointment");
  };

  return (
    <div
      suppressHydrationWarning
      className="flex w-full justify-center fixed top-4 z-30"
    >
      <div className="flex items-center justify-between container bg-white rounded-full shadow-md pl-1">
        <div className="flex items-center gap-8">
          <div onClick={handleClickLogo} className="cursor-pointer">
            <Logo theme="dark" />
          </div>
          {DATA.map(renderItem)}
        </div>
        <GradAniButton title="Đăng ký khám bệnh" onClick={handleClick} />
      </div>
    </div>
  );
};

export default TopNav;
