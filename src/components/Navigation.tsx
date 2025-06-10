"use client";

import { useState } from "react";

export default function SimpleNav() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = ["Home", "Projects", "Blogs"];

  return (
    <div className="w-full flex justify-center mt-18">
      <div className="inline-flex items-center gap-2 px-[12px] py-[5px] rounded-full border border-gray-700 bg-black">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-1 rounded-full text-sm font-bold cursor-pointer transition-all ${
              activeTab === tab.toLowerCase()
                ? "bg-[#51121d] text-[#c41e3a]"
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
