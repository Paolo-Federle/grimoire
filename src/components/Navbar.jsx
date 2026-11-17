import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { PATHS } from "../pages/path";
import { useFavoritesCount } from "../favoritesStore";
import WikiSearch from "./WikiSearch";

const linkFocus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const iconButtonSx = {
  color: "white",
  width: 44,
  height: 44,
  "&.Mui-focusVisible": { outline: "2px solid currentColor", outlineOffset: 2 },
};

function CollapsibleNavbarSearch({ expandedWidthClass = "w-60", onNavigate }) {
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const restoreFocus = useRef(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) {
      if (restoreFocus.current) triggerRef.current?.focus();
      restoreFocus.current = false;
      return undefined;
    }

    const handleOutsideClick = (event) => {
      if (!event.composedPath().includes(wrapperRef.current)) setExpanded(false);
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [expanded]);

  const handleNavigate = () => {
    setExpanded(false);
    onNavigate?.();
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative flex h-11 items-center ${
        expanded ? expandedWidthClass : "w-11"
      }`}
    >
      {expanded ? (
        <WikiSearch
          variant="navbar"
          placeholder="Search the wiki…"
          maxResults={8}
          autoFocus
          onDismiss={() => {
            restoreFocus.current = true;
            setExpanded(false);
          }}
          onNavigate={handleNavigate}
        />
      ) : (
        <IconButton
          ref={triggerRef}
          onClick={() => setExpanded(true)}
          aria-label="Search the wiki"
          sx={iconButtonSx}
        >
          <SearchIcon />
        </IconButton>
      )}
    </div>
  );
}

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 1180px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const location = useLocation();
  const mobileMenuId = useId();
  const [open, setOpen] = useState(false);
  const scrollOnNavigation = useRef(false);

  const hasFavs = useFavoritesCount() > 0;

  useEffect(() => {
    setOpen(false);
  }, [isMobile, location]);

  useLayoutEffect(() => {
    if (!scrollOnNavigation.current) return;
    scrollOnNavigation.current = false;
    if (window.scrollY !== 0) window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = (event) => {
    if (event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    scrollOnNavigation.current = true;
  };

  const handleSearchNavigation = () => {
    scrollOnNavigation.current = true;
    setOpen(false);
  };

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

  const favoritesPath = PATHS.FAVORITES;

  const desktopNavBase =
    `inline-flex items-center h-10 px-2 text-gray-300 hover:text-white transition-colors no-underline ${linkFocus}`;
  const desktopNavActive =
    `inline-flex items-center h-10 px-2 font-bold underline decoration-2 !text-white hover:!text-gray-300 ${linkFocus}`;

  const mobileNavBase =
    `flex min-h-11 items-center rounded px-2 !text-gray-200 no-underline hover:bg-neutral-700 hover:!text-white ${linkFocus}`;
  const mobileNavActive =
    `${mobileNavBase} bg-neutral-700 !text-white font-semibold underline underline-offset-4`;

  return (
    <>
      {isMobile && (
        <>
          <header className="sticky top-0 z-[1000] flex min-h-14 items-center gap-3 border-b border-neutral-700 bg-neutral-900 px-4 text-white">
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls={open ? mobileMenuId : undefined}
              aria-haspopup="dialog"
              sx={iconButtonSx}
            >
              <MenuIcon />
            </IconButton>
            <span className="text-lg font-semibold tracking-wide">World of Darkness</span>
          </header>

          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            transitionDuration={reducedMotion ? 0 : undefined}
            slotProps={{
              paper: {
                id: mobileMenuId,
                role: "dialog",
                "aria-modal": true,
                "aria-label": "Navigation menu",
                sx: {
                  width: "min(19rem, 90vw)",
                  backgroundColor: "#262626",
                  color: "white",
                  overscrollBehavior: "contain",
                },
              },
            }}
          >
            <div className="flex items-center justify-between border-b border-neutral-700 px-4 py-2">
              <span className="font-semibold">World of Darkness</span>
              <IconButton
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                sx={iconButtonSx}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <nav aria-label="Main navigation" className="grid gap-1 p-4">
              <CollapsibleNavbarSearch
                expandedWidthClass="w-full"
                onNavigate={handleSearchNavigation}
              />
              <NavLink
                to={favoritesPath}
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? mobileNavActive : mobileNavBase)}
              >
                <span className="inline-flex items-center gap-2">
                  {hasFavs ? <StarIcon color="warning" /> : <StarBorderIcon />}
                  Favorites
                </span>
              </NavLink>
              {navItems.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={handleLinkClick}
                  aria-current={location.pathname === to ? "page" : "location"}
                  className={({ isActive }) => (isActive ? mobileNavActive : mobileNavBase)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </Drawer>
        </>
      )}

      {/* DESKTOP NAVBAR */}
      {!isMobile && (
        <nav
          aria-label="Main navigation"
          className="
            w-full bg-neutral-900 text-white
            flex justify-center items-center gap-2 py-3 px-3
            sticky top-0 z-[1000]
          "
        >
          <CollapsibleNavbarSearch key={location.key} onNavigate={handleSearchNavigation} />

          <NavLink
            to={favoritesPath}
            onClick={handleLinkClick}
            aria-label="Favorites"
            className={({ isActive }) => (isActive ? desktopNavActive : desktopNavBase)}
          >
            <span className="inline-flex items-center leading-none">
              {hasFavs ? <StarIcon color="warning" /> : <StarBorderIcon />}
            </span>
          </NavLink>

          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleLinkClick}
              aria-current={location.pathname === to ? "page" : "location"}
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
