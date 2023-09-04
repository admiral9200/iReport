import React, { Fragment } from "react";
import clsx from "clsx";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";

const Menu = ({
    children,
    className,
    trigger
}) => {
    return (
        <HeadlessMenu
            as="div"
            className={clsx("relative inline-blocks", className)}
        >
            <div>
                <HeadlessMenu.Button className="w-full">{trigger}</HeadlessMenu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <HeadlessMenu.Items className="absolute left-0 top-auto button-full w-full mt-2 origin-bottom-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">{children}</div>
                </HeadlessMenu.Items>
            </Transition>
        </HeadlessMenu>
    )
}

export default Menu;