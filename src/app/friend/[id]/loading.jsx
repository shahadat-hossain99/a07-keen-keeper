import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <BiLoaderAlt className="text-4xl text-gray-300 animate-spin" />

      <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
        Loading Assets
      </p>
    </div>
  );
};
export default LoadingPage;
