import React from "react";

const IconExam = () => {
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
        strokeWidth={1}
      >
        <path
          strokeDasharray={20}
          strokeDashoffset={20}
          d="M3 7c0 -1.1 0.9 -2 2 -2h14c1.1 0 2 0.9 2 2v10c0 1.1 -0.9 2 -2 2h-14c-1.1 0 -2 -0.9 -2 -2v-10Z"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.5s"
            values="0;0.3"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="20;0"
          ></animate>
        </path>
        <path
          strokeDasharray={10}
          strokeDashoffset={10}
          d="M3 7h18"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.7s"
            dur="0.3s"
            values="0;0.3"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.3s"
            values="10;0"
          ></animate>
        </path>
        <path
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M7 11h10"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.3s"
            values="6;0"
          ></animate>
        </path>
        <path
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M7 14h7"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.1s"
            dur="0.3s"
            values="6;0"
          ></animate>
        </path>
        <path
          strokeDasharray={8}
          strokeDashoffset={8}
          d="M16 17l-2 2l-1 -1"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.4s"
            dur="0.3s"
            values="8;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

export default IconExam;
