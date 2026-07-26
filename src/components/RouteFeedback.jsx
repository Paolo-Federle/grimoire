import { Link } from "react-router-dom";
import { PATHS } from "../pages/path";

export function RouteLoadingFallback({ message = "Loading..." }) {
  return (
    <div className="longTextContainer" style={{ padding: "1rem 0" }} role="status">
      {message}
    </div>
  );
}

export function RouteNotFound({
  title = "Page not found",
  message = "The requested content does not exist or is no longer available.",
}) {
  return (
    <div className="longTextContainer">
      <div className="rounded border border-dashed border-gray-300 p-6 text-center">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        <p className="mb-4 text-sm text-gray-600">{message}</p>
        <Link className="underline" to={PATHS.HOME}>
          Go to the home page
        </Link>
      </div>
    </div>
  );
}

export function RouteLoadError({ onRetry = null }) {
  return (
    <div className="longTextContainer">
      <div className="rounded border border-red-200 bg-red-50 p-6 text-center">
        <h1 className="mb-2 text-xl font-bold text-red-900">Content could not be loaded</h1>
        <p className="mb-4 text-sm text-red-800">
          A page module or its data failed to load. You can try again safely.
        </p>
        {onRetry ? (
          <button
            type="button"
            className="rounded bg-[#333] px-4 py-2 text-sm text-white hover:bg-[#111]"
            onClick={onRetry}
          >
            Try again
          </button>
        ) : null}
      </div>
    </div>
  );
}
