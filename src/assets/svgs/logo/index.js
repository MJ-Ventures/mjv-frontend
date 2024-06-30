const Logo = ({ height = 82, width = 82, className, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...props}
      viewBox="0 0 882 248"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_225_190)">
        <path
          d="M4.13086 233.455V1.24438H130.923L170.273 135.162L210.432 1.24438H333.824V233.455H245.572V95.3267L204.603 233.455H133.676L92.3837 96.4602V233.455H4.13086ZM469.684 239.607C390.824 239.607 355.361 209.813 355.361 157.832V100.994H449.443V154.918C449.443 170.625 456.407 178.074 469.684 178.074C482.639 178.074 489.44 170.625 489.44 154.918V1.24438H587.895V157.185C587.895 208.517 548.223 239.607 469.684 239.607ZM669.994 233.455L602.792 1.24438H705.619L740.759 159.776L775.736 1.24438H877.429L809.742 233.455H669.994Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_225_190"
          x={-2}
          y={0}
          width="885.091"
          height={248}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_225_190"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_225_190"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
