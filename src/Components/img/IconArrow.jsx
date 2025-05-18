import * as React from "react"
const IconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <g
      fill="none"
      stroke="#7fffd4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path strokeDasharray={20} strokeDashoffset={20} d="M3 3h18">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.41s"
          values="20;0"
        />
      </path>
      <path strokeDasharray={16} strokeDashoffset={16} d="M12 21V7.5">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.615s"
          dur="0.41s"
          values="16;0"
        />
      </path>
      <path strokeDasharray={8} strokeDashoffset={8} d="m12 7 4 4m-4-4-4 4">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.025s"
          dur="0.41s"
          values="8;0"
        />
      </path>
    </g>
  </svg>
)
export default IconArrow
