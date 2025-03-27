import * as React from "react"
const Horario_img = (props) => (
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
    <g>
      <path strokeDasharray={4} strokeDashoffset={4} d="M12 3v2">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.41s"
          values="4;0"
        />
      </path>
      <path
        strokeDasharray={28}
        strokeDashoffset={28}
        d="M12 5c-3.31 0-6 2.69-6 6v6c-1 0-2 1-2 2h8m0-14c3.31 0 6 2.69 6 6v6c1 0 2 1 2 2h-8"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.41s"
          dur="0.82s"
          values="28;0"
        />
      </path>
      <animateTransform
        fill="freeze"
        attributeName="transform"
        begin="1.845s"
        dur="12.3s"
        keyTimes="0;0.05;0.15;0.2;1"
        type="rotate"
        values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"
      />
    </g>
    <path
      strokeDasharray={8}
      strokeDashoffset={8}
      d="M10 20c0 1.1.9 2 2 2s2-.9 2-2"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="1.23s"
        dur="0.41s"
        values="8;0"
      />
      <animateTransform
        fill="freeze"
        attributeName="transform"
        begin="2.255s"
        dur="12.3s"
        keyTimes="0;0.05;0.15;0.2;1"
        type="rotate"
        values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"
      />
    </path>
  </g>
</svg>
)
export default Horario_img
