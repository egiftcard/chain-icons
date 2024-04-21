import * as React from "react";
import { SVGProps } from "react";
const Xtrabytes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#56f4f1" />
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M6 9.016c0-.015.21-.016 2.918-.014l2.919.003 1.66 2.793 1.688 2.841.028.047.264-.45c.144-.248.262-.455.26-.461-.002-.006-.637-1.078-1.41-2.38s-1.406-2.373-1.406-2.38c0-.013.439-.015 3.073-.015 1.706 0 3.072.004 3.072.01 0 .02-6.515 11.097-6.53 11.1-.011.002-.964-1.608-3.276-5.537C7.467 11.526 6 9.026 6 9.016zm14.14-.009c0-.004 1.32-.007 2.931-.007H26l-.004.022c-.003.013-1.463 2.501-3.244 5.529-2.159 3.667-3.246 5.506-3.26 5.508-.013.002-.319-.507-1.345-2.234-.732-1.23-1.333-2.24-1.337-2.242-.008-.005-.533.886-.529.898.001.005.604 1.02 1.338 2.256a127.572 127.572 0 0 1 1.33 2.265c-.009.035-2.936 4.995-2.948 4.998-.019.004-2.929-4.94-2.923-4.965.005-.011 6.954-11.85 7.061-12.028z"
      />
    </g>
  </svg>
);
export default Xtrabytes;
