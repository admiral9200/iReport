import React from "react";
import clsx from "clsx";

const List = ({
    children,
    className
}) => {
    return (
        <div className={clsx("flex flex-col", className)}>
            {children}
        </div>
    )
}

export default List;