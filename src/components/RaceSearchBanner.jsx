import React from "react";
import { useLocation } from "react-router-dom";
import { PATHS } from "../pages/path";
import WikiSearch from "./WikiSearch";

const RACE_SEARCH_CONFIG = {
  [PATHS.MORTAL.BASE]: { scope: "mortal", label: "Mortal" },
  [PATHS.VAMPIRE.BASE]: { scope: "vampire", label: "Vampire" },
  [PATHS.WEREWOLF.BASE]: { scope: "werewolf", label: "Werewolf" },
  [PATHS.MAGE.BASE]: { scope: "mage", label: "Mage" },
  [PATHS.PROMETHEAN.BASE]: { scope: "promethean", label: "Promethean" },
  [PATHS.CHANGELING.BASE]: { scope: "changeling", label: "Changeling" },
  [PATHS.HUNTER.BASE]: { scope: "hunter", label: "Hunter" },
  [PATHS.GEIST.BASE]: { scope: "geist", label: "Geist" },
  [PATHS.MUMMY.BASE]: { scope: "mummy", label: "Mummy" },
};

export default function RaceSearchBanner() {
  const { pathname } = useLocation();
  const config = RACE_SEARCH_CONFIG[pathname];

  if (!config) return null;

  return (
    <section className="mx-auto mt-5 w-full max-w-3xl px-5">
      <WikiSearch
        scope={config.scope}
        allowGlobalToggle
        placeholder={`Search ${config.label} content...`}
        maxResults={8}
      />
    </section>
  );
}
