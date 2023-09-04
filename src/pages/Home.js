import React, { useState } from "react";
import {
    HiHome,
    HiMenu,
    HiMoon,
    HiPencilAlt,
    HiTruck,
    HiUsers
} from "react-icons/hi";
import useBreakpoint from "@restart/hooks/useBreakpoint";

import Sidebar from "../components/Sidebar";
import Avatar from "../components/Avatar";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import NavLink from "../components/NavLink";
import Notifications from "../components/Notifications";
import IconButton from "../components/IconButton";
import ProfileMenu from "../components/ProfileMenu";
// import QueryWrapper from "../components/QueryWrapper";
// import { Route } from "react-router-dom";

const links = [
    { icon: HiHome, label: "Home", to: "/home" },
    { icon: HiUsers, label: "Members", to: "/admin/members" },
    { icon: HiTruck, label: "Orders", to: "/admin/orders" },
    { icon: HiPencilAlt, label: "Products", to: "/admin/products" }
]

const Home = () => {
    const [open, setOpen] = useState(false);
    const isSmall = useBreakpoint("sm", "down");

    return (
        <div className="flex">
            <Sidebar
                open={open}
                setOpen={setOpen}
                title={
                    <div className="flex items-center">
                        <Avatar bg="primary" className="mr-3">
                            <Logo size={24} />
                        </Avatar>{"  "}
                        Admin
                    </div>
                }
            >
                <Nav orientation="vertical">
                    {
                        links.map(link => (
                            <NavLink key={link.to} onClick={() => setOpen(false)} to={link.to}>
                                <link.icon className="mr-4" size={20} />
                                {link.label}
                            </NavLink>
                        ))
                    }
                </Nav>
                <span className="flex-grow" />
                <div className="flex items-center">
                    <Notifications />
                    <IconButton className = "-mr-2">
                        <HiMoon />
                    </IconButton>
                </div>
                <ProfileMenu />
            </Sidebar>
            <main className="flex-grow">
                {isSmall && (
                    <header className="flex items-center justify-between px-4 py-4">
                        <IconButton className="-ml-2" onClick={() => setOpen(true)}>
                            <HiMenu />
                        </IconButton>
                    </header>
                )}
                {/* <QueryWrapper>
                    <Route exact path="/admin">
                        Admin Component
                    </Route>
                </QueryWrapper> */}
            </main>
        </div>
    )
}

export default Home;