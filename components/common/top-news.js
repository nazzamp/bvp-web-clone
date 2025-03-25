import React from "react";
import News from "./news";
import { API_PATH } from "@/constants/constants";

const TopNews = ({ data }) => {
  const renderItem = (item, index) => {
    return (
      <div
        className={
          index % 5 === 0 || index % 5 === 1 ? "col-span-6" : "col-span-4"
        }
        key={index}
      >
        <News
          key={index}
          title={item?.title}
          image={
            item?.cover?.url ? API_PATH + item?.cover?.url : "/images/logo.png"
          }
          id={item?.documentId}
        />
      </div>
    );
  };

  if (!data?.length) {
    return;
  }

  const firstItem = data[0];
  const leftData = [...data.slice(1)];

  return (
    <div className="flex flex-col gap-4">
      <News
        title={firstItem.title}
        coverHeight={320}
        image={
          firstItem?.cover?.url
            ? API_PATH + firstItem?.cover?.url
            : "/images/logo.png"
        }
        textOnImage
        textSize={20}
        id={firstItem.documentId}
      />
      <div className="grid grid-cols-12 gap-x-4 gap-y-10">
        {leftData.map(renderItem)}
      </div>
    </div>
  );
};

export default TopNews;
