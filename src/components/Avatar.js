import React from "react";
import clsx from "clsx";

const backgrounds = {
    default: "bg-gray-50",
    paper: "bg-white",
    primary: "bg-blue-500 text-white"
}

const Avatar = ({
    bg = "default",
    children,
    className
}) => {
    return (
        <div
            className={clsx(
                "inline-flex items-center justify-center h-10 w-10 rounded-full",
                backgrounds[bg],
                className
            )}
        >
            {children}
        </div>
    )
}

export default Avatar;