import React from "react";
import Logo from "../logo/logo";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <div
      className="text-white w-full flex justify-center md:py-28 py-12"
      style={{
        backgroundImage: `url('/images/footer-bg.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="container md:grid grid-cols-10">
        <div className="col-span-2 mb-12 md:mb-0">
          <Logo theme="light" />
        </div>
        <div className="col-span-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaMapMarkerAlt size={20} />
              <span className="text-xl font-bold">Địa chỉ</span>
            </div>
            <p>Số 1 Ngõ 32 Đường Trần Phú, Phường Cao Xanh, Quảng Ninh</p>
          </div>
          <div className="mt-16">
            <div className="flex items-center gap-2 mb-4">
              <FaSquarePhone size={20} />
              <span className="text-xl font-bold">Liên hệ</span>
            </div>
            <div className="flex flex-col gap-2">
              <p>Tổng đài: 02033.825101</p>
              <p>Đường dây nóng: 0966421313</p>
              <p>Giám đốc bệnh viện: 0917363566</p>
              <p>Địa chỉ mail: benhvienphoiquangninh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 mt-12 md:mt-0">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaClock size={20} />
              <span className="text-xl font-bold">Giờ làm việc</span>
            </div>
            <div className="flex flex-col gap-2">
              <p>Thứ 2 đến thứ 6: 7h30 - 16h30</p>
              <p>Thứ 7, Chủ nhật: 7h30 - 17h00</p>
            </div>
          </div>
          <div className="mt-16">
            <p>Copyright (c) 2025 by Quang Ninh Lung Hospital</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
