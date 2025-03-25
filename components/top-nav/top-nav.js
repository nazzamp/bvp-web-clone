import Logo from "../logo/logo";
import TopNavDropdown from "../top-nav-dropdown/top-nav-dropdown";
import GradAniButton from "../grad-ani-button/grad-ani-button";

const DATA = [
  {
    title: "giới thiệu",
    link: "",
    field: [
      {
        label: "Tổng quan",
        link: "",
      },
      {
        label: "Về bệnh viện",
        link: "",
      },
      {
        label: "Cơ cấu tổ chức",
        link: "",
      },
    ],
  },
  {
    title: "Khám chữa bệnh",
    link: "",
    field: [
      {
        label: "Chẩn đoán và điều trị",
        link: "",
      },
      {
        label: "Dịch vụ",
        link: "",
      },
      {
        label: "Hướng dẫn",
        link: "",
      },
    ],
  },
  {
    title: "Tin tức & sự kiện",
    link: "",
  },
  {
    title: "Văn bản & tài liệu",
    link: "",
  },
];

const TopNav = () => {
  const renderItem = (item, index) => {
    return (
      <TopNavDropdown title={item?.title} key={index} field={item?.field} />
    );
  };

  return (
    <div className="bg-white w-full flex justify-center fixed top-0 z-20">
      <div className="flex items-center justify-between container">
        <Logo />
        <div className="flex items-center gap-8">{DATA.map(renderItem)}</div>
        <GradAniButton title="Đặt khám bệnh" />
      </div>
    </div>
  );
};

export default TopNav;
