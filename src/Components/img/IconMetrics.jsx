import * as React from "react";
const IconMetrics = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
  >
    <g
      fill="none"
      stroke="#7fffd4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        strokeDasharray={64}
        strokeDashoffset={64}
        d="m13 3 6 6v12H5V3h8"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="1.23s"
          values="64;0"
        />
      </path>
      <path
        strokeDasharray={14}
        strokeDashoffset={14}
        strokeWidth={1}
        d="M12.5 3v5.5H19"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.435s"
          dur="0.41s"
          values="14;0"
        />
      </path>
      <path
        strokeDasharray={4}
        strokeDashoffset={4}
        d="M9 17v-3"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.845s"
          dur="0.41s"
          values="4;0"
        />
      </path>
      <path
        strokeDasharray={6}
        strokeDashoffset={6}
        d="M12 17v-4"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="2.255s"
          dur="0.41s"
          values="6;0"
        />
      </path>
      <path
        strokeDasharray={6}
        strokeDashoffset={6}
        d="M15 17v-5"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="2.665s"
          dur="0.41s"
          values="6;0"
        />
      </path>
    </g>
  </svg>
);
export default IconMetrics;
