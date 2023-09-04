import React from "react";
import clsx from "clsx";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({
    children,
    className,
    onClick,
    to
}) => {
    return (
        <RouterNavLink
            activeClassName = "bg-gray-50 text-gray-900"
            className={clsx(
                "flex items-center font-medium rounded-xl px-4 py-4 text-gray-500",
                className
            )}
            onClick={onClick}
            to={to}
        >
            {children}
        </RouterNavLink>
    )
}

export default NavLink;