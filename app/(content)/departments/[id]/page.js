"use client";

import { API_PATH } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import parse from "html-react-parser";
import "./news-detail-style.css";
import { LuClock } from "react-icons/lu";
import Spinner from "@/components/spinner/spinner";

const DepartmentDetail = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["departmentDetail"],
    queryFn: () =>
      fetch(API_PATH + "/api/departments/" + id).then((res) => res.json()),
  });

  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex w-full justify-center py-6">
      <div className="container">
        <h1 className="text-2xl font-bold text-[#0066B1]">
          {data?.data?.title}
        </h1>
        <div className="flex items-center mt-2 mb-6 gap-2">
          <LuClock />
          <p className="italic">{data?.data?.writtenAt}</p>
        </div>
        {data?.data?.content && (
          <div className="flex flex-col gap-4 news-detail-style">
            {parse(data?.data?.content)}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentDetail;
