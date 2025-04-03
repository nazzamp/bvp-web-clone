import { useRouter } from "nextjs-toploader/app";
import React from "react";

const AnnouncementItem = ({ id, title, writtenAt }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/announcements/" + id);
  };

  return (
    <div className="flex gap-1 cursor-pointer" onClick={handleClick}>
      <div>
        <div className="flex shrink">
          <p className="inline-block text-[#045b9a] hover:text-[#2c446e]">
            {title}
          </p>
        </div>
        <p className="text-sm mt-1 text-zinc-700">({writtenAt})</p>
      </div>
    </div>
  );
};

export default AnnouncementItem;
