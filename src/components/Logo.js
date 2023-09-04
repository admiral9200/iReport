import React from "react";

const Logo = ({
    className,
    size = 100
}) => {
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
        height={size}
        width={size}
        viewBox="0 0 24 24"
        version="1.1"
    >
        <path d="m 6,7 6,10" />
        <path d="M 18,7 V 7" />
    </svg>
}

export default Logo;