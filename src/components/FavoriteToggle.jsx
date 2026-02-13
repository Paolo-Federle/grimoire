import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { toggleFavorite, isFavorite } from "../utils";

export default function FavoriteToggle({ row, columns, sourcePath, titleIsLink = false }) {
  const [, forceRerender] = useState(0);

  const fav = isFavorite(row, columns, sourcePath);

  return (
    <Tooltip title={fav ? "Remove from favorites" : "Add to favorites"}>
      <IconButton
        size="small"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          // ✅ passa titleIsLink come 4° parametro
          toggleFavorite(row, columns, sourcePath, titleIsLink);

          forceRerender((t) => t + 1);
        }}
        aria-label={fav ? "remove favorite" : "add favorite"}
      >
        {fav ? <StarIcon color="warning" /> : <StarBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}
