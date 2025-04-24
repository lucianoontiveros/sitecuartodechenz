import * as React from "react";
const SvgComponent = () => (
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
        fill="#7fffd4"
        fillOpacity={0.3}
        d="M4 12V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1Z"
      >
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.307s"
          values="0.3;0"
        />
      </path>
      <path
        strokeDasharray={14}
        strokeDashoffset={14}
        d="m8 12 3 3 5-5"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.307s"
          dur="0.41s"
          values="14;0"
        />
      </path>
    </g>
  </svg>
);
export default SvgComponent;
