import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";

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
            title={`Favorites from: ${g.from}`}
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
