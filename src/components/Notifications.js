import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiBell } from "react-icons/hi";
import useNotifications from "../hooks/useNotifications";
import List from "./List";
import ListItem from "./ListItem";

const Notifications = () => {
    // const {data} = useNotifications();
    const data = [
        {
            id: 1,
            code: "example code 1"
        },
        {
            id: 2,
            code: "example code 2"
        },
        {
            id: 3,
            code: "example code 3"
        }
    ]

    return (
        <Popover className="relative">
            <Popover.Button>
                <HiBell />
            </Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transition scale-95 opacity-0"
                enterTo="transition scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transition scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >   
                <Popover.Panel className="absolute z-10 w-screen max-x-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-x3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-back ring-opacity-5">
                        <List className="bg-white">
                            {(!data || data.length === 0) && <>Nothing</>}
                            {data && 
                                data.length > 0 && 
                                data.map((notification) => (
                                    <ListItem key={notification.id} title={notification.code} />
                                ))
                            }
                        </List>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Notifications;