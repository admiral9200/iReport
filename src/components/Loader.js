import React from "react";
import clsx from "clsx";
import Logo from "./Logo";

const Loader = ({ className }) => {
    return (
        <div className={clsx("flex justify-center px-4 py-6", className)}>
            <Logo className="animate-pulse text-gray-300" />
        </div>
    )
}

export default Loader;