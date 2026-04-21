const Icon_youtube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      fillOpacity="0"
      d="M12 11L12 12L12 13z"
    >
      <animate
        fill="freeze"
        attributeName="d"
        begin="1.23s"
        dur="0.41s"
        values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"
      />
      <set
        fill="freeze"
        attributeName="fill-opacity"
        begin="1.23s"
        to="1"
      />
    </path>
    <path
      fill="none"
      stroke="#fff"
      strokeDasharray="64"
      strokeDashoffset="64"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"
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

export default Icon_youtube;
