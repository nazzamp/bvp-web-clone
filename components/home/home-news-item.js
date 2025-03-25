import { API_PATH } from "@/constants/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeNewsItem = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/news/" + data?.documentId);
  };

  return (
    <div>
      <div
        className="h-[280px] relative rounded-xl overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <Image
          src={API_PATH + data?.cover?.url}
          alt="cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-lg font-medium mt-5 mb-2 text-primaryBlue line-clamp-3">
        {data?.title}
      </p>
      <div className="flex items-center gap-1 text-[#668397] text-sm">
        <span>{data?.writtenAt}</span>
      </div>
    </div>
  );
};

export default HomeNewsItem;
