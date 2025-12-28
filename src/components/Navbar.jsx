import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { PATHS } from "../pages/path";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(v => !v);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 770);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navItems = [
        { label: "Home", to: PATHS.HOME },
        { label: "Mortals", to: PATHS.MORTAL.BASE },
        { label: "Vampire", to: PATHS.VAMPIRE.BASE },
        { label: "Werewolf", to: PATHS.WEREWOLF.BASE },
        { label: "Mage", to: PATHS.MAGE.BASE },
        { label: "Promethean", to: PATHS.PROMETHEAN.BASE },
        { label: "Changeling", to: PATHS.CHANGELING.BASE },
        { label: "Hunter", to: PATHS.HUNTER.BASE },
        { label: "Geist", to: PATHS.GEIST.BASE },
        { label: "Mummy", to: PATHS.MUMMY.BASE },
    ];

    return (
        <>
            {/* MOBILE BAR */}
            {isMobile && (
                <header
                    className="fixed top-0 left-0 right-0 h-14 bg-neutral-900 text-white
                               flex items-center px-4 border-b border-neutral-700 shadow-sm z-[9999]"
                >
                    <IconButton onClick={toggle} aria-label="open menu" sx={{ color: "white" }}>
                        <MenuIcon fontSize="medium" />
                    </IconButton>

                    <span className="ml-3 text-lg font-semibold tracking-wide">
                        World of Darkness
                    </span>
                </header>
            )}

            {/* Spacing under mobile header */}
            {isMobile && <div className="h-14" />}

            {/* MOBILE SIDENAV */}
            {isMobile && (
                <div
                    className={`
                        fixed top-0 left-0 h-full bg-neutral-800 text-white
                        overflow-x-hidden transition-all duration-300 z-[1000]
                        ${open ? "w-64" : "w-0"}
                    `}
                    onClick={toggle}
                >
                    <div className="mt-16 flex flex-col px-6 space-y-3">
                        {navItems.map(({ label, to }) => (
                            <NavLink
                                key={to}
                                exact="true"
                                to={to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "!text-white font-bold underline !hover:text-gray-300 !:text-gray-300"
                                        : "text-gray-300 hover:text-white transition-colors"
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}

            {/* DESKTOP NAVBAR */}
            {!isMobile && (
                <nav
                    className="
                        w-full bg-neutral-900 text-white
                        flex justify-center items-center gap-6 py-3
                        sticky top-0 z-[1000]
                    "
                >
                    {navItems.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            exact="true"
                            to={to}
                            className={({ isActive }) =>
                                isActive
                                    ? "font-bold underline decoration-2 text-white"
                                    : "text-gray-300 hover:text-white transition-colors no-underline"
                            }

                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            )}
        </>
    );
}
