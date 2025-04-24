import * as React from "react";
const IconHouse = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
  >
    <path
      fill="none"
      d="m6 8 6-5 6 5v12h-2v-7l-1-1H9l-1 1v7H6V8Z"
    >
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="2.255s"
        dur="0.307s"
        values="0;0.3"
      />
    </path>
    <g
      fill="none"
      stroke="#7fffd4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        strokeDasharray={16}
        strokeDashoffset={16}
        d="M5 21h14"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.41s"
          values="16;0"
        />
      </path>
      <path
        strokeDasharray={14}
        strokeDashoffset={14}
        d="M5 21V8m14 13V8"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.41s"
          dur="0.41s"
          values="14;0"
        />
      </path>
      <path
        strokeDasharray={24}
        strokeDashoffset={24}
        d="M9 21v-8h6v8"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.82s"
          dur="0.82s"
          values="24;0"
        />
      </path>
      <path
        strokeDasharray={28}
        strokeDashoffset={28}
        d="m2 10 10-8 10 8"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.025s"
          dur="1.23s"
          values="28;0"
        />
      </path>
    </g>
  </svg>
);
export default IconHouse;
