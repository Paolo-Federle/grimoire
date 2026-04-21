import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Link } from "react-router-dom";

export default function CompactDetailLink({ to, label = "Open details" }) {
  return (
    to ? (
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        aria-label={`${label} (opens in a new tab)`}
        className="inline-flex h-8 w-8 items-center justify-center rounded bg-white text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
      >
        <OpenInNewRoundedIcon sx={{ fontSize: "1rem" }} />
      </Link>
    ) : (
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded bg-white text-gray-300 ring-1 ring-gray-200"
      >
      <OpenInNewRoundedIcon sx={{ fontSize: "1rem" }} />
      </span>
    )
  );
}
