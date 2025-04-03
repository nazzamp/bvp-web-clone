"use client";

import { API_PATH, CONNECT_LINKS } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuLink } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import Spinner from "../spinner/spinner";

const Announcement = () => {
  const router = useRouter();

  const { isPending, error, data } = useQuery({
    queryKey: ["announcements"],
    queryFn: () =>
      fetch(
        API_PATH +
          "/api/announcements?populate[0]=cover&fields[0]=title&fields[1]=documentId&fields[2]=writtenAt&sort=writtenAt:desc?pagination[page]=1&pagination[pageSize]=10"
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  const handleClick = (id) => () => {
    router.push("/announcements/" + id);
  };

  const renderItem = (item, index) => {
    return (
      <div
        key={index}
        className="flex gap-1 cursor-pointer"
        onClick={handleClick(item?.documentId)}
      >
        <div>
          <MdKeyboardArrowRight size={20} />
        </div>
        <div>
          <div className="flex shrink">
            <p className="inline-block">{item?.title}</p>
          </div>
          <p className="text-sm mt-1 text-zinc-700">({item?.writtenAt})</p>
        </div>
      </div>
    );
  };

  const renderConnectionLink = (item, index) => {
    return (
      <a key={index} href={item.link} target="_blank">
        <img
          src={"/images/links/" + item?.image}
          alt="hospital"
          style={{ width: "100%", height: "auto" }}
        />
      </a>
    );
  };

  return (
    <div className="col-span-1 flex flex-col gap-4">
      <div className="flex flex-col bg-[#FEF094] rounded-xl overflow-hidden">
        <div className="bg-[#005EBD] flex items-center gap-2 px-4 py-2">
          <FaPhoneFlip className="text-white" />
          <span className="uppercase font-bold text-white">Đường dây nóng</span>
        </div>
        <div className="flex flex-col gap-4 font-bold items-center py-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <span>Bộ Y tế</span>
            <div className="flex items-center gap-2 text-red-500">
              <FaPhoneVolume />
              <span>19009095</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>Sở Y tế</span>
            <div className="flex items-center gap-2 text-red-500">
              <FaPhoneVolume />
              <span>0966631313</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>
              Đường dây nóng thông báo dịch
              <br /> tỉnh Quảng Ninh
            </span>
            <div className="flex items-center gap-2 text-red-500">
              <FaPhoneVolume />
              <span>18009214</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-xl overflow-hidden border-[1px] border-zinc-200">
        <div className="bg-[#005EBD] flex items-center gap-2 px-4 py-2">
          <HiSpeakerWave className="text-white" />
          <span className="uppercase font-bold text-white">Thông báo</span>
        </div>
        <div className="p-4 flex flex-col gap-3">
          {data?.data?.map(renderItem)}
        </div>
      </div>
      <div className="flex flex-col rounded-xl overflow-hidden border-[1px] border-zinc-200">
        <div className="bg-[#005EBD] flex items-center gap-2 px-4 py-2">
          <LuLink className="text-white" />
          <span className="uppercase font-bold text-white">Liên kết</span>
        </div>
        <div className="p-1">{CONNECT_LINKS.map(renderConnectionLink)}</div>
      </div>
    </div>
  );
};

export default Announcement;
