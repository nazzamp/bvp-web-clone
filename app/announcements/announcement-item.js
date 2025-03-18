import { useRouter } from "next/navigation";
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
          <p className="inline-block">{title}</p>
        </div>
        <p className="text-sm mt-1 text-zinc-700">({writtenAt})</p>
      </div>
    </div>
  );
};

export default AnnouncementItem;
