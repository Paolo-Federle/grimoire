import { Link, useLocation } from "react-router-dom";

function formatLabel(segment) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "sheet" && segments[1] && segments[1] !== "editor") {
    return (
      <nav className="text-gray-700 mt-4 mb-3 ml-4">
        <Link to="/sheet" className="underline text-gray-800 hover:text-black">
          Sheets
        </Link>
      </nav>
    );
  }

  if (segments.length <= 1) return null;

  const paths = segments.map(
    (_, i) => "/" + segments.slice(0, i + 1).join("/")
  );

  return (
    <nav className="text-gray-700 mt-4 mb-3 ml-4">
        {paths.map((p, i) => {
          const label = formatLabel(segments[i]);

          return (
            <span key={p}>
              <Link
                to={p}
                className="underline text-gray-800 hover:text-black"
              >
                {label}
              </Link>

              {i < paths.length - 1 && " / "}
            </span>
          );
        })}
    </nav>
  );
}
