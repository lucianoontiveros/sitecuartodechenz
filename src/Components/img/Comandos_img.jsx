import * as React from "react"
const Comandos_img = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={96}
  height={96}
  viewBox="0 0 24 24"
  {...props}
>
  <g
    fill="none"
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
  >
    <path
      strokeDasharray={20}
      strokeDashoffset={20}
      d="M5 21v-1c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v1"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.41s"
        values="20;0"
      />
    </path>
    <path
      strokeDasharray={20}
      strokeDashoffset={20}
      d="M11 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.41s"
        dur="0.41s"
        values="20;0"
      />
    </path>
    <path strokeDasharray={6} strokeDashoffset={6} d="M20 3v4">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="1.025s"
        dur="0.41s"
        values="6;0"
      />
      <animate
        attributeName="stroke-width"
        begin="2.05s"
        dur="6.15s"
        keyTimes="0;0.1;0.2;0.3;1"
        repeatCount="indefinite"
        values="2;3;3;2;2"
      />
    </path>
    <path strokeDasharray={2} strokeDashoffset={2} d="M20 11v.01">
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="1.435s"
        dur="0.41s"
        values="2;0"
      />
      <animate
        attributeName="stroke-width"
        begin="2.665s"
        dur="6.15s"
        keyTimes="0;0.1;0.2;0.3;1"
        repeatCount="indefinite"
        values="2;3;3;2;2"
      />
    </path>
  </g>
</svg>
)
export default Comandos_img
