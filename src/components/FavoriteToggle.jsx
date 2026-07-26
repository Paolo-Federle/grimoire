import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { getFavoriteKey, toggleFavorite, useFavoriteKey } from "../favoritesStore";

export default function FavoriteToggle({ row, columns, sourcePath, titleIsLink = false }) {
  const fav = useFavoriteKey(getFavoriteKey(row, columns, sourcePath));

  return (
    <Tooltip title={fav ? "Remove from favorites" : "Add to favorites"}>
      <IconButton
        size="small"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          // ✅ passa titleIsLink come 4° parametro
          toggleFavorite(row, columns, sourcePath, titleIsLink);

        }}
        aria-label={fav ? "remove favorite" : "add favorite"}
      >
        {fav ? <StarIcon color="warning" /> : <StarBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}
