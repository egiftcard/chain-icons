import * as React from "react";
import { SVGProps } from "react";
const Tokenbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#5244D4" />
      <path
        fill="#FFF"
        d="M15.7 27.4C9.238 27.4 4 22.162 4 15.7 4 9.238 9.238 4 15.7 4c6.462 0 11.7 5.238 11.7 11.7 0 6.462-5.238 11.7-11.7 11.7zm2.89-7.7-2.89-4-2.89 4-2.35-4 2.62-4.48h5.24l2.62 4.48-2.35 4zm.86-10.4h-7.5l-3.74 6.4 3.75 6.4h7.49l3.74-6.4-3.74-6.4z"
      />
    </g>
  </svg>
);
export default Tokenbox;
