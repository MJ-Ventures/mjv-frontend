const SearchIcon = ({ height = 32, width = 32, className, ...props }) => {
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
        d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z"
        stroke="#F7F7F7"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.0002 28.0002L22.2002 22.2002"
        stroke="#F7F7F7"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
