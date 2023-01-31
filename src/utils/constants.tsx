import React from "react";

export const enum Colors {
  BLACK = "#000000",
  GREY1 = "#F3F3F3",
  GREY2 = "#E5E5E5",
  GREY3 = "#7D7D7D",
  WHITE = "#FFFFFF",
}

export const Fonts = {
  Display: {
    fontSize: "200px",
    lineHeight: "150px",
  },
  Heading1: {
    fontSize: "56px",
    lineHeight: "64px",
  },
  Heading2: {
    fontSize: "24px",
    lineHeight: "29px",
  },
  Heading3: {
    fontSize: "18px",
    lineHeight: "22px",
  },
  Subhead1: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
  Subhead2: {
    fontSize: "13px",
    lineHeight: "17px",
  },
  Link1: {
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: "2.5px",
  },
  Link2: {
    fontSize: "9px",
    lineHeight: "11px",
    letterSpacing: "2px",
  },
};

export const SVGIcons = {
  icons: {
    "view-image": (
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fillRule="nonzero">
          <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
        </g>
      </svg>
    ),
    "back-button": (
      <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#000" fill="none" fillRule="evenodd">
          <path
            d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
            strokeWidth="2"
          />
          <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
        </g>
      </svg>
    ),
    "next-button": (
      <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#000" fill="none" fillRule="evenodd">
          <path
            d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
            strokeWidth="2"
          />
          <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
        </g>
      </svg>
    ),
  },
};
