"use client";

import { LogContext } from "@/context/log.context";
import React, { useContext } from "react";
import { LuMessageSquare } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

const TextBtn = ({ friend }) => {
  const { addLog } = useContext(LogContext);
  const handleText = () => {
    addLog("text", friend);
    // console.log(timeLine);
    toast.success(`Opened chat with ${friend.name}...`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div>
      <button
        onClick={handleText}
        className="btn sm:h-30 w-full flex sm:flex-col rounded-lg"
      >
        <LuMessageSquare size={22} /> Text
      </button>
    </div>
  );
};

export default TextBtn;
