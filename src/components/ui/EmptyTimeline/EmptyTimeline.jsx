import { LogContext } from "@/context/log.context";
import React, { useContext } from "react";
import { LuInbox } from "react-icons/lu";

const EmptyTimeline = () => {
  const { timeLine } = useContext(LogContext);

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center gap-3 min-h-[40vh]">
      <div className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center">
        <LuInbox size={24} className="text-gray-400" />
      </div>
      <p className="font-semibold text-gray-700">No interactions found</p>
      <p className="text-sm text-gray-400">
        {timeLine.length === 0
          ? "Start a check-in from a friend's page to see it here."
          : "Try adjusting your filters or search term."}
      </p>
    </div>
  );
};

export default EmptyTimeline;
