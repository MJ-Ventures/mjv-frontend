const PenToolIcon = ({ height = 32, width = 32, className, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...props}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 25.3333L25.3333 16L29.3333 20L20 29.3333L16 25.3333Z"
        stroke="white"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0003 17.3334L22.0003 7.33341L2.66699 2.66675L7.33366 22.0001L17.3337 24.0001L24.0003 17.3334Z"
        stroke="white"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66699 2.66675L12.7817 12.7814"
        stroke="white"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 17.3333C16.1394 17.3333 17.3333 16.1394 17.3333 14.6667C17.3333 13.1939 16.1394 12 14.6667 12C13.1939 12 12 13.1939 12 14.6667C12 16.1394 13.1939 17.3333 14.6667 17.3333Z"
        stroke="white"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PenToolIcon;
