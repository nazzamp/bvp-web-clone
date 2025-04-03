"use client";

import NewsHorizontal from "@/components/common/news-horizontal";
import Spinner from "@/components/spinner/spinner";
import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import QueryString from "qs";
import { PaginationCustom } from "@/components/pagination/pagination";

const NewsPage = () => {
  const [recentPage, setRecentPage] = useState(1);

  const { isPending, error, data } = useQuery({
    queryKey: ["news", recentPage],
    queryFn: () =>
      fetch(API_PATH + `/api/news?${query}`).then((res) => res.json()),
  });

  const query = QueryString.stringify(
    {
      populate: ["cover"],
      fields: ["title", "documentId", "writtenAt"],
      sort: ["writtenAt:desc"],
      pagination: { page: recentPage, pageSize: 10 },
    },
    {
      encodeValuesOnly: true,
    }
  );

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
      {data?.data && (
        <>
          <div className="container flex flex-col gap-6">
            {data?.data?.map(renderItem)}
          </div>
          {data?.meta.pagination.pageCount !== 1 && (
            <PaginationCustom
              recentPage={data?.meta.pagination.page}
              lastPage={data?.meta.pagination.pageCount}
              setRecentPage={setRecentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default NewsPage;
