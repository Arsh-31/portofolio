"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="ml-8 mt-5">{time} &nbsp;&nbsp; Chandigarh, India</div>;
}
