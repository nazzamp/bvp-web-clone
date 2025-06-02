import Image from "next/image";
import HomeTechItem from "./home-tech-item";

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
  return (
    <div className="mt-40">
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="font-bold text-4xl bg-gradient-to-l text-[#273C8C] mt-2 leading-[48px]">
            Kỹ thuật chuyên sâu <br /> & chẩn đoán sớm
          </h2>
          <p className="mt-3 text-[#4B5478] text-base max-w-[480px] font-medium">
            Chúng tôi phát triển các kỹ thuật tiên tiến trong việc chẩn đoán và
            điều trị bệnh lao, bao gồm
          </p>
        </div>
        <div className="col-span-1 relative flex justify-center">
          <Image
            src={"/images/lab-01.png"}
            alt="doctor"
            width={276}
            height={260}
            className="relative z-10"
          />
          <div className="rounded-full bg-[#EDF4FF] w-[520px] h-[520px] absolute bottom-[-320px] left-[0px] z-0 animate-pulse" />
          <div className="rounded-full bg-[#E5EFFF] w-[400px] h-[400px] absolute bottom-[-320px] left-[0px] z-0 animate-pulse" />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 mt-12 mb-16 relative z-10">
        {DATA.map((item, index) => (
          <HomeTechItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeTech;
