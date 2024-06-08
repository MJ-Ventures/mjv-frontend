const ArrowIcon = ({ height = 7, width = 6, className, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...props}
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.131802 6.3682C0.307538 6.54393 0.592462 6.54393 0.768198 6.3682L5.1 2.0364V5.45C5.1 5.69853 5.30147 5.9 5.55 5.9C5.79853 5.9 6 5.69853 6 5.45V0.95C6 0.701472 5.79853 0.5 5.55 0.5H1.05C0.801472 0.5 0.6 0.701472 0.6 0.95C0.6 1.19853 0.801472 1.4 1.05 1.4H4.4636L0.131802 5.7318C-0.043934 5.90754 -0.043934 6.19246 0.131802 6.3682Z"
        fill="#F7F7F7"
      />
    </svg>
  );
};

export default ArrowIcon;
