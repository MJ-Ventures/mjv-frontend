const Logo = ({ height = 82, width = 82, className, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...props}
      viewBox="0 0 82 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2381_4686)">
        <path
          d="M0.199219 31.1273V0.165909H12.0532L15.732 18.0216L19.4865 0.165909H31.0225V31.1273H22.7717V12.7102L18.9415 31.1273H12.3105L8.45006 12.8614V31.1273H0.199219ZM43.7242 31.9476C36.3515 31.9476 33.036 27.975 33.036 21.0443V13.4659H41.8319V20.6557C41.8319 22.75 42.483 23.7432 43.7242 23.7432C44.9354 23.7432 45.5712 22.75 45.5712 20.6557V0.165909H54.7758V20.958C54.7758 27.8023 51.0668 31.9476 43.7242 31.9476ZM62.4514 31.1273L56.1686 0.165909H65.782L69.0673 21.3034L72.3373 0.165909H81.8446L75.5165 31.1273H62.4514Z"
          fill="#F7F7F7"
        />
      </g>
      <defs>
        <clipPath id="clip0_2381_4686">
          <rect width={82} height={32} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;