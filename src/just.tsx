import * as React from "react";
import { SVGProps } from "react";
const Just = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" {...props}>
    <path
      fill="#b41514"
      fillRule="evenodd"
      d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0Z"
    />
    <path
      fill="#fff"
      d="M496 825a67 67 0 1 1 67-67 67 67 0 0 1-67 67Zm0-462a67 67 0 1 1 67-67 67 67 0 0 1-67 67ZM222 646v-93h548v93H222z"
    />
    <path
      fill="#fff"
      d="M496 507c-156.3 0-283.5-124-288.8-279h99.1c5.2 100.3 88.2 180 189.7 180s184.5-79.7 189.7-180h99.1C779.5 383 652.3 507 496 507Z"
    />
  </svg>
);
export default Just;
