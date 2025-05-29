"use client";

import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import NewsHorizontal from "@/components/common/news-horizontal";
import Spinner from "@/components/spinner/spinner";
import QueryString from "qs";
import { PaginationCustom } from "@/components/pagination/pagination";
import { useState } from "react";

const QuangNinhMedicals = () => {
  const [recentPage, setRecentPage] = useState(1);

  const { isPending, error, data } = useQuery({
    queryKey: ["quang-ninh-medicals", recentPage],
    queryFn: () =>
      fetch(API_PATH + `/api/quang-ninh-medicals?${query}`).then((res) =>
        res.json()
      ),
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
        {data?.data && (
          <>
            <div className="flex flex-col mt-6 gap-4">
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
    </div>
  );
};

export default QuangNinhMedicals;
