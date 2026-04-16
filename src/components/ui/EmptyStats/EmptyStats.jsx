import React from "react";

import Link from "next/link";
import { LuChartBar } from "react-icons/lu";

const EmptyStats = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 bg-white border border-dashed border-gray-200 rounded-xl">
      {/* 1. Subtle Animated Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gray-50 rounded-full scale-150 blur-xl opacity-50"></div>
        <LuChartBar
          size={48}
          className="text-gray-300 relative z-10"
          strokeWidth={1.5}
        />
      </div>

      {/* 2. Typography */}
      <div className="text-center max-w-xs">
        <h3 className="text-lg font-medium text-[#131313] mb-2">
          No insights yet
        </h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed">
          Your statistics will appear here once you start logging interactions
          with your friends.
        </p>
      </div>

      {/* 3. Call to Action */}
      <Link href="/" className="mt-8">
        <button className="px-6 py-2.5 bg-[#131313] text-white text-[11px] font-medium tracking-[0.15em] uppercase rounded-sm hover:opacity-90 transition-opacity active:scale-95">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default EmptyStats;
