import React from "react";
import clsx from "clsx";

const variants = {
    h1: "font-semibold text-xl",
    h2: "font-semibold",
    h3: "font-semibold",
    h4: "font-semibold",
}

const Typography = ({
    as,
    bold,
    children,
    className,
    muted,
    small,
    smaller,
    variant = "div"
}) => {
    const Component = as || variant;
    return (
        <Component
            className={clsx(
                variants[variant],
                bold && "font-semibold",
                muted && "text-gray-600",
                small && "text-sm",
                smaller && "text-xs",
                className
            )}
        >
            {children}
        </Component>
    )
}

export default Typography;