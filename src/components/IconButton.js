import React from "react";
import clsx from "clsx";

export default React.forwardRef(
    function IconButton({children, className, onClick}, ref) {
        return (
            <button
                className={clsx(
                    "inline-flex items-center justify-center rounded-full p-3 hover:bg-gray-100",
                    className
                )}
                onClick={onClick}
                ref={ref}
            >
                {children}
            </button>
        )
    }
)