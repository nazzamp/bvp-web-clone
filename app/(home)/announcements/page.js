"use client";

import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import AnnouncementItem from "./announcement-item";
import Spinner from "@/components/spinner/spinner";
import { PaginationCustom } from "@/components/pagination/pagination";
import qs from "qs";
import { useState } from "react";

const Announcement = () => {
  const [recentPage, setRecentPage] = useState(1);

  const { isPending, error, data } = useQuery({
    queryKey: ["announcements", recentPage],
    queryFn: () =>
      fetch(API_PATH + `/api/announcements?${query}`).then((res) => res.json()),
    keepPreviousData: true,
  });

  const query = qs.stringify(
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
      <AnnouncementItem
        key={index}
        id={item?.documentId}
        title={item?.title}
        writtenAt={item?.writtenAt}
      />
    );
  };

  return (
    <div className="col-span-1 flex flex-col gap-4">
      <div className="flex flex-col overflow-hidden">
        <span className="uppercase font-bold text-2xl text-[#0066B1]">
          Thông báo
        </span>
        {data?.data && (
          <>
            <div className="flex flex-col mt-6 gap-4">
              {data?.data?.map(renderItem)}
            </div>
            <PaginationCustom
              recentPage={data?.meta.pagination.page}
              lastPage={data?.meta.pagination.pageCount}
              setRecentPage={setRecentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Announcement;
