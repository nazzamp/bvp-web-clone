"use client";

import Image from "next/image";
import React from "react";
import HomeNewsItem from "./home-news-item";
import ViewMoreButton from "../view-more-button/view-more-button";
import Spinner from "../spinner/spinner";
import { useQuery } from "@tanstack/react-query";
import { API_PATH } from "@/constants/constants";

const HomeNews = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(
        API_PATH +
          "/api/news?populate[0]=cover&fields[0]=title&fields[1]=documentId&fields[2]=isHot&fields[3]=writtenAt&filters[isHot][$eq]=true&sort=writtenAt:desc&pagination[page]=1&pagination[pageSize]=4"
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mt-32 w-full rounded-3xl flex flex-col items-center">
      <div className="flex items-center gap-1 mb-2 justify-center">
        <Image
          src={"/svgs/speaker.svg"}
          alt="idea icon"
          width={24}
          height={24}
        />
        <span className="uppercase text-lg font-bold text-[#273C8C]">
          tin tức
        </span>
      </div>
      <h2 className="text-center font-bold text-4xl bg-gradient-to-l from-[#273C8C] to-[#273C8C] bg-clip-text text-transparent">
        Sự kiện chính và thông báo
      </h2>
      <div className="w-full grid grid-cols-4 gap-7 mt-12 mb-16">
        {data?.data &&
          data.data.map((item, index) => (
            <HomeNewsItem data={item} key={index} />
          ))}
      </div>
      <ViewMoreButton title="Trang tin tức" />
    </div>
  );
};

export default HomeNews;
