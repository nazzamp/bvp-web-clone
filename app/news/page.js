"use client";

import NewsHorizontal from "@/components/home/news-horizontal";
import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";

const NewsPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(
        API_PATH +
          "/api/news?populate[0]=cover&fields[0]=title&fields[1]=documentId&fields[2]=writtenAt"
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

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
      />
    );
  };

  if (!data?.data?.length) {
    return;
  }

  return (
    <div className="flex w-full flex-col">
      <span className="uppercase font-bold text-2xl text-[#0066B1] mb-8">
        Tin tức sự kiện
      </span>
      <div className="container flex flex-col gap-6">
        {data?.data?.map(renderItem)}
      </div>
    </div>
  );
};

export default NewsPage;
