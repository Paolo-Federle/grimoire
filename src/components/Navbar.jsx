import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "../css/Navbar.css";
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
            {/* BARRA MOBILE — sempre visibile */}
            {isMobile && (
                <header
                    className="
                        fixed top-0 left-0 right-0
                        h-14
                        bg-neutral-900 text-white
                        flex items-center
                        px-4
                        border-b border-neutral-700
                        shadow-sm
                        z-[9999]
                    "
                >
                    <IconButton
                        onClick={toggle}
                        aria-label="open menu"
                        sx={{ color: "white" }}
                    >
                        <MenuIcon fontSize="medium" />
                    </IconButton>

                    <span className="ml-3 text-lg font-semibold tracking-wide">
                        World of Darkness
                    </span>
                </header>
            )}

            {/* Spazio per evitare che il contenuto venga coperto */}
            {isMobile && <div style={{ height: "3.5rem" }} />}

            {/* SIDENAV MOBILE */}
            {isMobile && (
                <div
                    className={`sidenav ${open ? "show" : ""}`}
                    onClick={toggle}
                >
                    <div className="mt-8 flex flex-col">
                        {navItems.map(({ label, to }) => (
                           <NavLink
                            key={to}
                            exact="true"
                            to={to}
                            className={({ isActive }) =>
                                [
                                    "block transition-colors",
                                    isActive
                                        ? "font-bold underline text-white"
                                        : "text-gray-200"
                                ].join(" ")
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
                <nav className="navbar">
                    {navItems.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            exact="true"
                            to={to}
                            className={({ isActive }) =>
                                isActive ? "active-nav-item" : undefined
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
