"use client";
import { useState, useEffect } from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // once the component mounts, show the children
  }, []);

  if (!isLoaded) return null; // or a loader/spinner if you want

  return <>{children}</>;
}
