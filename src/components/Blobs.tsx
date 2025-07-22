import React from "react";

const Blobs = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden",
    }}
    aria-hidden="true"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="1440" height="900" fill="none" /> */}
      {/* Wave 1 */}
      <path
        d="M1204,0 Q1350,400 1440,450 L1440,0 Z"
        fill="#BEE9F7"
        fillOpacity="0.85"
      />
      <path
        d="M0,410 Q420,390 550,590 L800,900 L0,900 Z"
        fill="#BEE9F7"
        fillOpacity="0.85"
        />
    </svg>
  </div>
);

export default Blobs; 