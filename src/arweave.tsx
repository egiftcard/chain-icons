import * as React from "react";
import { SVGProps } from "react";
const Arweave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" {...props}>
    <circle
      cx={15.9}
      cy={15.9}
      r={14.7}
      fill="none"
      stroke="#222326"
      strokeWidth={2.5}
    />
    <path
      fill="#222326"
      d="M18.7 21.2c-.1-.1-.1-.3-.2-.5 0-.2-.1-.4-.1-.6-.2.2-.4.3-.6.5-.2.2-.5.3-.7.4-.3.1-.5.2-.9.3-.3.1-.7.1-1 .1-.6 0-1.1-.1-1.6-.3-.5-.2-.9-.4-1.3-.7-.4-.3-.6-.7-.8-1.1-.2-.4-.3-.9-.3-1.4 0-1.2.5-2.2 1.4-2.8.9-.7 2.3-1 4.1-1h1.7v-.7c0-.6-.2-1-.5-1.3-.4-.3-.9-.5-1.6-.5-.6 0-1 .1-1.3.4-.3.3-.4.6-.4 1h-3c0-.5.1-1 .3-1.4.2-.4.5-.8 1-1.2.4-.3.9-.6 1.5-.8.6-.2 1.3-.3 2.1-.3.7 0 1.3.1 1.9.3.6.2 1.1.4 1.6.8.4.3.8.8 1 1.3.2.5.4 1.1.4 1.8v5c0 .6 0 1.1.1 1.5.1.4.2.8.3 1v.2h-3.1zm-2.9-2.1c.3 0 .6 0 .8-.1.3-.1.5-.2.7-.3.2-.1.4-.2.5-.4l.4-.4v-2h-1.5c-.5 0-.9 0-1.2.1-.3.1-.6.2-.8.4-.2.2-.4.3-.5.6-.1.2-.1.5-.1.7 0 .4.1.7.4 1 .3.3.8.4 1.3.4z"
    />
  </svg>
);
export default Arweave;
