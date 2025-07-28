"use client";

// import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Time() {
  const formatTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-6 mt-[-20px] fixed text-[#acacac] flex gap-2 items-center hover:text-[#f2efea] transition-colors duration-300 ease-in-out">
      {/* <Clock size={20} /> */}
      {time}
    </div>
  );
}
