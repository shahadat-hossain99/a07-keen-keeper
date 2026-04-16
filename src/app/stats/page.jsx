"use client";
import EmptyStats from "@/components/ui/EmptyStats/EmptyStats";
import { LogContext } from "@/context/log.context";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const StatsPage = () => {
  const { timeLine } = useContext(LogContext);
  console.log(timeLine);

  const call = timeLine.filter((c) => c.type === "call");
  const text = timeLine.filter((c) => c.type === "text");
  const video = timeLine.filter((c) => c.type === "video");

  const data = [
    { name: "call", value: call.length, fill: "#244d3f" },
    { name: "text", value: text.length, fill: "#7f37f5" },
    { name: "video", value: video.length, fill: "#43ad6d" },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container max-w-3/4 mx-auto px-4 py-16">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Friendship Analytics
        </h1>

        {timeLine.length === 0 ? (
          <EmptyStats />
        ) : (
          <div className="border border-gray-200 rounded-2xl shadow-md bg-white p-6 md:p-8">
            {/* Subtitle */}
            <p className="font-semibold text-[#244D3F] mb-6">
              By Interaction Type
            </p>

            <div className="border  rounded-lg shadow-sm p-4  flex items-center justify-center  max-w-sm mx-auto">
              <div style={{ width: "300px", height: "300px" }}>
                <PieChart width={300} height={300}>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    cornerRadius={8}
                    isAnimationActive={true}
                  ></Pie>

                  <Tooltip />
                  {/* <Legend verticalAlign="bottom" height={36} /> */}
                </PieChart>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#7C3AED]"></span>
                <span>Text</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#244D3F]"></span>
                <span>Call</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
                <span>Video</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
