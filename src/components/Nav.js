import React from "react";
import clsx from "clsx";

const Nav = ({
    children,
    orientation = "horizontal"
}) => {
    return (
        <nav
            className={clsx(
                "flex flex-wrap",
                orientation === "vertical" && "flex-col"
            )}
        >
            {children}
        </nav>
    )
}

export default Nav;