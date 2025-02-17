import "./about.css";

export function About() {
  return (
    <div className="container-about">
      <svg
        className="icon top-left"
        width="258"
        height="258"
        viewBox="0 0 208 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2337_5282)">
          <path
            d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z"
            fill="url(#paint0_linear_2337_5282)"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_f_2337_5282"
            x="0"
            y="0"
            width="208"
            height="208"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="6"
              result="effect1_foregroundBlur_2337_5282"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="paint0_linear_2337_5282"
            x1="196"
            y1="104"
            x2="12"
            y2="104"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1B2226"></stop>
            <stop offset="1" stopColor="#1B2226" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="container-txt">
        <h1 className="title-h1">ABOUT US</h1>
        <p className="txt-about">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat
          non proident, sunt in culpa qui officia dese runt mollit anim id est
          laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint
          occaecat
        </p>
      </div>
      <div className="counter">
        <div className="tf-counter">
          <h2 className="title-tf-counter"> Total Iteam</h2>
          <span className="conter-number">2240+</span>
        </div>
        <div className="tf-counter">
          <h3 className="title-tf-counter">Profiles Whitelisted</h3>
          <span className="conter-number">1000+</span>
        </div>
      </div>
      <svg
        className="icon bottom-right"
        width="208"
        height="208"
        viewBox="0 0 208 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2337_5328)">
          <path
            d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z"
            fill="url(#paint0_linear_2337_5328)"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_f_2337_5328"
            x="0"
            y="0"
            width="208"
            height="208"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="6"
              result="effect1_foregroundBlur_2337_5328"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="paint0_linear_2337_5328"
            x1="196"
            y1="104"
            x2="12"
            y2="104"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1B2226"></stop>
            <stop offset="1" stopColor="#1B2226" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
