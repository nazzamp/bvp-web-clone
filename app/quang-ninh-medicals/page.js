"use client";

import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import NewsHorizontal from "@/components/common/news-horizontal";
import Spinner from "@/components/spinner/spinner";

const QuangNinhMedicals = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["quang-ninh-medicals"],
    queryFn: () =>
      fetch(
        API_PATH +
          "/api/quang-ninh-medicals?populate[0]=cover&fields[0]=title&fields[1]=documentId&fields[2]=writtenAt&sort=writtenAt:desc"
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  const renderItem = (item, index) => {
    return (
      <NewsHorizontal
        key={index}
        title={item?.title}
        image={
          item?.cover?.url ? API_PATH + item?.cover?.url : "/images/logo.png"
        }
        id={item?.documentId}
        textSize={20}
        time={item?.writtenAt}
        path="quang-ninh-medicals"
      />
    );
  };

  return (
    <div className="col-span-1 flex flex-col gap-4">
      <div className="flex flex-col rounded-xl overflow-hidden">
        <span className="uppercase font-bold text-2xl text-[#0066B1]">
          Y tế Quảng Ninh
        </span>
        <div className="flex flex-col mt-6 gap-4">
          {data?.data?.map(renderItem)}
        </div>
      </div>
    </div>
  );
};

export default QuangNinhMedicals;
