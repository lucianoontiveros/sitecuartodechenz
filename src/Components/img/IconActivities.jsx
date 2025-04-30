import React from "react";

const IconActivities = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g
        fill="#7fffd4"
        fillOpacity={0}
        stroke="#7fffd4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={20}
          strokeDashoffset={20}
          d="M10 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.82s"
            values="20;0"
          ></animate>
        </path>
        <path
          strokeDasharray={36}
          strokeDashoffset={36}
          d="M10 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.025s"
            dur="1.025s"
            values="36;0"
          ></animate>
        </path>
        <path
          fill="none"
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M18 11h4"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="3.28s"
            dur="0.41s"
            values="6;0"
          ></animate>
        </path>
        <path
          fill="none"
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M20 9v4"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="3.69s"
            dur="0.41s"
            values="6;0"
          ></animate>
        </path>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="2.255s"
          dur="1.025s"
          values="0;1"
        ></animate>
      </g>
    </svg>
  );
};

export default IconActivities;
