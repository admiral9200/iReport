import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import useBreakpoint from "@restart/hooks/useBreakpoint";

const Sidebar = ({
    setOpen,
    open,
    width = 280,
    title = "Home",
    children
}) => {
    const isSmall = useBreakpoint("sm", "down");

    if (setOpen && isSmall) {
        return (
            <Transition.Root
                show={open}
                as={Fragment}
            >

            </Transition.Root>
        )
    }

    return (
        <div
            className="flex flex-col flex-shrink-0 min-h-screen bg-white"
            style={{width}}
        >
            {
                title && (
                    <div className="px-6 py-8">
                        <h2 className="font-bold">{title}</h2>
                    </div>
                )
            }
            {/* <div>{children}</div> */}
            <div>
                Home
            </div>
        </div>
    )
}

export default Sidebar;