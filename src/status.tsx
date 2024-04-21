import * as React from "react";
import { SVGProps } from "react";
const Status = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#5B6DEE" />
      <path
        fill="#FFF"
        d="M13.3 15.02a9.144 9.144 0 0 0-1.664.144c.452-4.18 3.936-7.346 8.084-7.346 2.54 0 4.28 1.244 4.28 3.818 0 2.575-2.089 3.819-5.136 3.819-2.25 0-3.314-.434-5.564-.434m-.164 1.524C10.089 16.545 8 17.79 8 20.364s1.74 3.818 4.28 3.818c4.148 0 7.632-3.165 8.084-7.346a9.144 9.144 0 0 1-1.664.144c-2.25 0-3.315-.435-5.564-.435"
      />
    </g>
  </svg>
);
export default Status;
