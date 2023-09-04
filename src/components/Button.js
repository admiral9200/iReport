import React from "react";
import clsx from "clsx";

export const ButtonColor = [
    "error",
    "primary",
    "success",
    "warning",
    "ghost-primary"
];

const colors = {
    error: "bg-red-500 text-white",
    "ghost-primary": "text-blue-900 bg-transparent border-transparent hover:bg-gray-100",
    primary: "text-blue-900 bg-blue-100 border-transparent hover:bg-blue-200",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white"
};

export default React.forwardRef(
    function Button({
        children,
        className,
        color = "primary",
        disabled,
        loading,
        onClick,
        type = "button"
    },
        ref
    ) {
        return (
            <button
                className={clsx(
                    "inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md",
                    disabled ? "bg-gray-300" : colors[color],
                    loading && "animate-pulse",
                    className
                )}
                disabled={disabled}
                onClick={onClick}
                ref={ref}
                type={type}
            >
                {children}
            </button>
        )
    }
)