"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { API_PATH } from "@/constants/constants";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";

const INPUT_CONS = [
  {
    key: "name",
    placeholder: "Tên của bạn",
  },
  {
    key: "phone",
    placeholder: "Số điện thoại",
  },
  {
    key: "examination",
    placeholder: "Tình trạng bệnh",
  },
];

const Appointment = () => {
  const mutation = useMutation({
    mutationFn: () => {
      return fetch(API_PATH + "/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: form.values,
        }),
      });
    },
    onError: (error, variables, context) => {
      toast.error(error);
    },
    onSuccess: (data, variables, context) => {
      toast.success("Đăng ký khám thành công");
      form.resetForm();
    },
  });

  const form = useFormik({
    initialValues: { name: "", phone: "", examination: "" },
  });

  const renderItem = (item, index) => {
    return (
      <Input
        placeholder={item.placeholder}
        key={index}
        className="h-[64px] !text-base"
        value={form.values[item.key]}
        onChange={(e) => form.setFieldValue(item.key, e.target.value)}
        type={item?.key === "phone" ? "number" : "text"}
      />
    );
  };

  const handleSubmit = () => {
    mutation.mutate();
    window.scroll(0, 0);
  };

  return (
    <div>
      <h1 className="uppercase font-bold text-2xl text-[#0066B1] mb-8">
        Đăng ký khám bệnh
      </h1>
      <div className="flex flex-col max-w-96 gap-4">
        {INPUT_CONS.map(renderItem)}
      </div>
      <Button
        className="mt-4 w-full md:w-fit mr-2 bg-[#273C8C] hover:bg-[#697ec8] text-white font-semibold rounded-full px-6 py-2"
        size={"lg"}
        onClick={handleSubmit}
      >
        Đăng ký
      </Button>
    </div>
  );
};

export default Appointment;
