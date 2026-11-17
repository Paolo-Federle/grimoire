import { Link, useLocation } from "react-router-dom";
import { getCanonicalMageArcanaPath, PATHS } from "../pages/path";

const routeLabels = {
  [PATHS.MAGE.ORDER]: "Orders and Ministries",
  [PATHS.MAGE.PATH]: "Paths",
  [PATHS.SHEET]: "Sheets",
  [PATHS.LOCATIONS_BASE]: "Locations",
  [`${PATHS.MAGE.ORDER}/council_of_free_assemblies`]: "Free Council",
};

// URL segments are not always pages (for example /merits and /external).
function collectRoutes(value) {
  return Object.values(value).flatMap((route) =>
    typeof route === "string" ? [route] : collectRoutes(route)
  );
}

const pageRoutes = new Set(collectRoutes(PATHS).filter((path) => path.startsWith("/") && !path.includes(":")));
const smallWords = new Set(["a", "an", "and", "for", "in", "of", "or", "the", "to", "with"]);

function formatLabel(segment) {
  let decoded = segment;
  try {
    decoded = decodeURIComponent(segment);
  } catch {
    // A malformed URL should still have readable navigation.
  }
  return decoded.replace(/[-_]+/g, " ").split(/\s+/).map((word, index) =>
    index > 0 && smallWords.has(word.toLowerCase())
      ? word.toLowerCase()
      : word.replace(/^\p{L}/u, (character) => character.toUpperCase())
  ).join(" ");
}

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = getCanonicalMageArcanaPath(pathname).split("/").filter(Boolean);
  if (segments.length <= 1) return null;

  let crumbs;
  if (segments[0] === "sheet") {
    crumbs = [{ path: PATHS.SHEET, label: "Sheets" }, { path: pathname, label: "Character sheet" }];
  } else {
    crumbs = segments.map((segment, index) => {
      const originalPath = "/" + segments.slice(0, index + 1).join("/");
      const path = originalPath === PATHS.MAGE.MINISTRIES ? PATHS.MAGE.ORDER : originalPath;
      return { path, label: routeLabels[path] || formatLabel(segment), isCurrent: index === segments.length - 1 };
    }).filter((crumb) => crumb.isCurrent || pageRoutes.has(crumb.path));
    if (crumbs.length === 1) crumbs.unshift({ path: PATHS.HOME, label: "Home" });
  }

  return (
    <nav aria-label="Breadcrumb" className="text-gray-700 mt-4 mb-3 mx-4 text-sm">
      <ol className="m-0 flex list-none flex-wrap items-baseline gap-x-2 gap-y-1 p-0">
        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex min-w-0 items-baseline gap-2">
            {index > 0 && <span aria-hidden="true" className="text-gray-400">/</span>}
            {index === crumbs.length - 1 ? (
              <span aria-current="page" className="break-words font-medium text-gray-600">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="underline text-gray-800 underline-offset-2 hover:text-black">{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
