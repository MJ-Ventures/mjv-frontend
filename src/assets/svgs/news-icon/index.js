const NewsIcon = ({ height = 40, width = 40, className, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...props}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.1419 27.5333H16.8975V40H23.1419V27.5333Z" fill="white" />
      <path d="M23.1419 0H16.8975V12.4667H23.1419V0Z" fill="white" />
      <path d="M27.5273 16.8756V23.1201H39.994V16.8756H27.5273Z" fill="white" />
      <path d="M0 16.8813L0 23.1257H12.4667V16.8813H0Z" fill="white" />
      <path
        d="M27.5395 23.1015L23.124 27.517L31.9392 36.3321L36.3547 31.9167L27.5395 23.1015Z"
        fill="#484847"
      />
      <path
        d="M8.07267 3.63644L3.65723 8.05188L12.4724 16.8671L16.8879 12.4516L8.07267 3.63644Z"
        fill="#484847"
      />
      <path
        d="M23.109 12.4708L27.5244 16.8862L36.3396 8.07105L31.9241 3.65559L23.109 12.4708Z"
        fill="#484847"
      />
      <path
        d="M3.64608 31.9358L8.06152 36.3512L16.8767 27.536L12.4613 23.1206L3.64608 31.9358Z"
        fill="#484847"
      />
    </svg>
  );
};

export default NewsIcon;
