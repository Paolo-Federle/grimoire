import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { PATHS } from "../pages/path";
import { useFavoritesCount } from "../favoritesStore";
import WikiSearch from "./WikiSearch";

function CollapsibleNavbarSearch({ expandedWidthClass = "w-60", onNavigate }) {
  const wrapperRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return undefined;

    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setExpanded(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [expanded]);

  const handleNavigate = () => {
    setExpanded(false);
    onNavigate?.();
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative flex h-10 items-center transition-[width] duration-200 ${
        expanded ? expandedWidthClass : "w-10"
      }`}
    >
      {expanded ? (
        <WikiSearch
          variant="navbar"
          placeholder="Search the wiki..."
          maxResults={8}
          autoFocus
          onDismiss={() => setExpanded(false)}
          onNavigate={handleNavigate}
        />
      ) : (
        <IconButton
          onClick={() => setExpanded(true)}
          aria-label="Search the wiki"
          sx={{ color: "white" }}
        >
          <SearchIcon />
        </IconButton>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1180);
  const [open, setOpen] = useState(false);

  const hasFavs = useFavoritesCount() > 0;

  const toggle = () => setOpen((v) => !v);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1180);
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

  // Se non hai PATHS.FAVORITES, lascia "/favorites" o metti la tua route corretta
  const favoritesItem = { label: "Favorites", to: PATHS.FAVORITES || "/favorites" };

  // Classi condivise per allineare perfettamente icona e testo
  const desktopNavBase =
    "inline-flex items-center h-10 px-2 text-gray-300 hover:text-white transition-colors no-underline";
  const desktopNavActive =
    "inline-flex items-center h-10 px-2 font-bold underline decoration-2 !text-white hover:!text-gray-300";

  const mobileNavBase =
    "inline-flex items-center h-10 text-gray-300 hover:text-white transition-colors";
  const mobileNavActive =
    "inline-flex items-center h-10 !text-white font-bold underline hover:!text-gray-300";

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
            <div className="pb-2" onClick={(event) => event.stopPropagation()}>
              <CollapsibleNavbarSearch
                expandedWidthClass="w-full"
                onNavigate={() => setOpen(false)}
              />
            </div>

            {/* ⭐ Favorites before Home */}
            <NavLink
              key={favoritesItem.to}
              to={favoritesItem.to}
              className={({ isActive }) => (isActive ? mobileNavActive : mobileNavBase)}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="inline-flex items-center gap-2 leading-none">
                {hasFavs ? <StarIcon color="warning" /> : <StarBorderIcon />}
                Favorites
              </span>
            </NavLink>

            {navItems.map(({ label, to }) => (
              <NavLink
                key={to}
                exact="true"
                to={to}
                className={({ isActive }) =>
                  isActive ? mobileNavActive : mobileNavBase
                }
                onClick={(e) => e.stopPropagation()}
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
            flex justify-center items-center gap-2 py-3 px-3
            sticky top-0 z-[1000]
          "
        >
          <CollapsibleNavbarSearch />

          {/* ⭐ Favorites icon before Home */}
          <NavLink
            key={favoritesItem.to}
            to={favoritesItem.to}
            className={({ isActive }) => (isActive ? desktopNavActive : desktopNavBase)}
          >
            <span className="inline-flex items-center leading-none">
              {hasFavs ? <StarIcon color="warning" /> : <StarBorderIcon />}
            </span>
          </NavLink>

          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              exact="true"
              to={to}
              className={({ isActive }) => (isActive ? desktopNavActive : desktopNavBase)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
}
