"use client";

import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import AnnouncementItem from "./announcement-item";

const Announcement = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["announcements"],
    queryFn: () =>
      fetch(
        API_PATH +
          "/api/announcements?populate[0]=cover&fields[0]=title&fields[1]=documentId&fields[2]=writtenAt"
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

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
      <div className="flex flex-col rounded-xl overflow-hidden">
        <span className="uppercase font-bold text-2xl text-[#0066B1]">
          Thông báo
        </span>
        <div className="flex flex-col mt-6 gap-4">
          {data?.data?.map(renderItem)}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
