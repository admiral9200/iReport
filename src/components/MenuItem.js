import React from "react";
import { Menu } from "@headlessui/react";

const MenuItem = ({
    as = React.Fragment,
    children,
    ...props
}) => {
    return (
        <Menu.Item {...props} as={as}>
            {({ active }) => (
                <button
                    className={`${
                        active ? "bg-blue-100 text-blue-700" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                >
                    {children}
                </button>
            )}
        </Menu.Item>
    )
}

export default MenuItem;