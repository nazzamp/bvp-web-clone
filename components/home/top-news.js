import React from "react";
import News from "./news";
import { API_PATH } from "@/constants/constants";

const TopNews = ({ data }) => {
  const renderItem = (item, index) => {
    return (
      <News
        key={index}
        title={item?.title}
        image={
          item?.cover?.url ? API_PATH + item?.cover?.url : "/images/logo.png"
        }
        id={item?.documentId}
      />
    );
  };

  if (!data?.length) {
    return;
  }

  const firstItem = data[0];
  const thirdItemBelow = [data[1], data[2], data[3]];

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
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
          <div className="grid grid-cols-3 gap-4">
            {thirdItemBelow.map(renderItem)}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-6">
          {thirdItemBelow.map(renderItem)}
        </div>
      </div>
    </div>
  );
};

export default TopNews;
