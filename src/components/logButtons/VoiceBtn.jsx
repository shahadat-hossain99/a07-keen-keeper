"use client";

import { LogContext } from "@/context/log.context";
import { useContext } from "react";
import { LuPhone } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

const VoiceBtn = ({ friend }) => {
  const { addLog } = useContext(LogContext);

  const handleVoiceCall = () => {
    addLog("call", friend);
    toast.success(`Initiating voice call with ${friend.name}...`, {
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
        onClick={handleVoiceCall}
        className="btn sm:h-30 w-full flex sm:flex-col rounded-lg"
      >
        <LuPhone size={22} /> Call
      </button>
    </div>
  );
};

export default VoiceBtn;
