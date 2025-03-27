import * as React from "react"
const Avisos_img = (props) => (
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
      <path strokeDasharray={72} strokeDashoffset={72} d="M12 3h7v18H5V3h7Z">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="1.23s"
          values="72;0"
        />
      </path>
      <path
        strokeDasharray={12}
        strokeDashoffset={12}
        strokeWidth={1}
        d="M14.5 3.5v3h-5v-3"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.435s"
          dur="0.41s"
          values="12;0"
        />
      </path>
      <path strokeDasharray={4} strokeDashoffset={4} d="M9 10h3">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.845s"
          dur="0.41s"
          values="4;0"
        />
      </path>
      <path strokeDasharray={6} strokeDashoffset={6} d="M9 13h5">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="2.255s"
          dur="0.41s"
          values="6;0"
        />
      </path>
      <path strokeDasharray={8} strokeDashoffset={8} d="M9 16h6">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="2.665s"
          dur="0.41s"
          values="8;0"
        />
      </path>
    </g>
    <path fill="none" d="M6 4h4v2h4V4h4v16H6V4Z">
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="3.28s"
        dur="0.307s"
        values="0;0.3"
      />
    </path>
  </svg>
)
export default Avisos_img
