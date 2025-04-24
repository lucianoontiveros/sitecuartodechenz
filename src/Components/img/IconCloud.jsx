import * as React from "react";
const IconCloud = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
  >
    <path
      fill="none"
      stroke="#7fffd4"
      strokeDasharray={64}
      strokeDashoffset={64}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 19h11c2.21 0 4-1.79 4-4s-1.79-4-4-4h-1v-1a5.002 5.002 0 0 0-9.9-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5Z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="1.23s"
        values="64;0"
      />
    </path>
  </svg>
);
export default IconCloud;
