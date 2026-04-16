"use client";
import { LogContext } from "@/context/log.context";
import React, { useContext } from "react";
import { LuVideo } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

const VideoBtn = ({ friend }) => {
  const { addLog } = useContext(LogContext);
  const handleVideoCall = () => {
    addLog("video", friend);
    toast.success(`Initiating video call with ${friend.name}...`, {
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
        onClick={handleVideoCall}
        className="btn sm:h-30 w-full flex sm:flex-col rounded-lg"
      >
        <LuVideo size={22} /> Video
      </button>
    </div>
  );
};

export default VideoBtn;
