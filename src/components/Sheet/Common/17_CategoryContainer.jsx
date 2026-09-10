import { useId, useState } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export default function CategoryContainer({
  children,
  section,
  paddingOverride = "p-4",
  defaultOpen = true,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const paddingClass = typeof paddingOverride === "string" ? paddingOverride : "";

  return (
    <section className={paddingClass}>
      <h1 className="m-0">
        <button
          type="button"
          className="relative flex min-h-9 w-full items-center justify-center rounded-md px-9 py-1.5 text-center text-l font-bold capitalize text-gray-900 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
          aria-controls={contentId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>{section}</span>
          <span className="absolute right-2 inline-flex text-gray-500" aria-hidden="true">
            {isOpen ? (
              <ExpandLessRoundedIcon sx={{ fontSize: "1.15rem" }} />
            ) : (
              <ExpandMoreRoundedIcon sx={{ fontSize: "1.15rem" }} />
            )}
          </span>
        </button>
      </h1>

      <Collapse in={isOpen} timeout="auto">
        <div
          id={contentId}
          role="region"
          aria-label={`${section} content`}
          className="flex space-x-4 pt-1"
        >
          {children}
        </div>
      </Collapse>
    </section>
  );
}
