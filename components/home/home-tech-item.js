import { API_PATH } from "@/constants/constants";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";

const HomeTechItem = ({ data }) => {
  return (
    <div className="bg-[#e9f0f9] rounded-xl overflow-hidden">
      <div className="h-[220px] relative cursor-pointer">
        <Image
          src={data.image}
          alt="cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-5">
        <p className="text-lg font-bold text-[#273C8C] line-clamp-3">
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default HomeTechItem;
