import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-[#0066B1]">
      <div className="container grid grid-cols-4 pt-6 pb-12 text-white gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <p className="font-bold text-lg">BỆNH VIỆN PHỔI QUẢNG NINH</p>
          <div className="h-[1px] w-full bg-white opacity-40" />
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt />
            <span>
              Số 1, Ngõ 32, Đường Trần Phú, Phường Cao Xanh, tỉnh Quảng Ninh
            </span>
          </div>
          <span>Số điện thoại bệnh viện: 02033.825101</span>
          <span>Số điện thoại đường dây nóng của Bệnh viện: 0966421313</span>
          <span>Số điện thoại của Giám đốc bệnh viện: 0917363566</span>
          <span>Địa chỉ mail: benhvienphoiquangninh@gmail.com</span>
          <div className="flex gap-2 items-center">
            <BiSolidBookContent />
            <span>
              Chịu trách nhiệm nội dung: Ông Hoàng Văn Hy - Giám đốc bệnh viện
            </span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <p className="font-bold text-lg">THỐNG KÊ TRUY CẬP</p>
          <div className="h-[1px] w-full bg-white opacity-40" />
          <span>Trực tuyến</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
