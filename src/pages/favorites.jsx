import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import SimpleTable from "../components/SimpleTable"; // ADATTA PATH
import { listFavorites, clearFavorites } from "../utils"; // ADATTA PATH

function signatureFromKeys(keys) {
  return [...keys].sort().join("|");
}

function groupFavorites(favorites) {
  const map = new Map();

  for (const fav of favorites) {
    const from = fav.from || "";
    const data = fav.data || {};
    const keys = Object.keys(data);
    const sig = signatureFromKeys(keys);
    const groupKey = `${from}::${sig}`;

    if (!map.has(groupKey)) {
      map.set(groupKey, {
        from,
        headers: keys,
        items: [],
        hasAnyLink: false,
      });
    }

    const group = map.get(groupKey);
    group.items.push(fav);
    if (fav.titleIsLink && fav.linkUrl) group.hasAnyLink = true;
  }

  return Array.from(map.values());
}

function favoriteToRow(fav) {
  const row = { ...(fav.data || {}) };

  // ✅ fondamentale: key originale per toggle/remove corretto anche senza link
  row.__favKey = fav.key;

  // reinietto link solo se in origine era link
  if (fav.titleIsLink && fav.linkUrl) {
    row.link = fav.linkUrl;
  }

  return row;
}

// Estrae l'ultimo segmento della route "/vampire/disciplines" -> "disciplines"
function getTitleLabelFromFromPath(fromPath) {
  if (!fromPath) return "Favorites";
  const clean = String(fromPath).split("?")[0].split("#")[0];
  const parts = clean.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || clean;
  const label = last.replace(/_/g, " ");
return label ? label[0].toUpperCase() + label.slice(1) : label;
}

function getTitleLinkFromFromPath(fromPath) {
  return fromPath || "/";
}

export default function FavoritesPage() {
  const [snapshot, setSnapshot] = useState([]);

  const refresh = () => setSnapshot(listFavorites());

  useEffect(() => {
    refresh();

    const onChanged = () => refresh();
    window.addEventListener("favorites:changed", onChanged);
    window.addEventListener("storage", onChanged);

    return () => {
      window.removeEventListener("favorites:changed", onChanged);
      window.removeEventListener("storage", onChanged);
    };
  }, []);

  const groups = useMemo(() => groupFavorites(snapshot), [snapshot]);

  const handleClearAll = () => {
    clearFavorites();
  };

  return (
    <div className="grid-container">
      {snapshot.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <Button variant="contained" color="error" onClick={handleClearAll}>
            Clear all favorites
          </Button>
        </div>
      )}

      {!snapshot.length ? (
        <div>No favorites saved.</div>
      ) : (
        groups.map((g, idx) => {
          const tableRows = g.items.map(favoriteToRow);

          return (
            <SimpleTable
              key={`${g.from}-${idx}`}
              title={
                <Link to={getTitleLinkFromFromPath(g.from)} className="underline">
                  {getTitleLabelFromFromPath(g.from)}
                </Link>
              }
              table={tableRows}
              headers={g.headers}
              activeRowLink={g.hasAnyLink}
            />
          );
        })
      )}
    </div>
  );
}
