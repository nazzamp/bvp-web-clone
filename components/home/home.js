"use client";

import TopNews from "./top-news";
import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";

import Announcement from "./announcement";
import Spinner from "../spinner/spinner";

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(
        API_PATH +
          "/api/news?populate[0]=cover&fields[0]=title&fields[1]=documentId&fields[2]=isHot&filters[isHot][$eq]=true&sort=writtenAt:desc"
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="container flex flex-col !p-0">
        <TopNews data={data?.data} />
      </div>
    </div>
  );
};

export default Home;
