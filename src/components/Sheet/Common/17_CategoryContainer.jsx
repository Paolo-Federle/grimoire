import { useId, useState } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export default function CategoryContainer({
  children,
  section,
  paddingOverride = "p-4 sm:p-5",
  defaultOpen = true,
  fillHeight = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const paddingClass = typeof paddingOverride === "string" ? paddingOverride : "";

  return (
    <section className={`min-w-0 rounded-xl border border-gray-200 bg-white shadow-sm print:shadow-none ${fillHeight ? "flex h-full flex-col" : ""} ${paddingClass}`}>
      <h1 className="m-0">
        <button
          type="button"
          className="relative flex min-h-9 w-full items-center justify-between gap-3 rounded-md py-1.5 text-left font-sans text-sm font-semibold uppercase tracking-wide text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
          aria-controls={contentId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>{section}</span>
          <span className="inline-flex shrink-0 text-gray-400" aria-hidden="true">
            {isOpen ? (
              <ExpandLessRoundedIcon sx={{ fontSize: "1.15rem" }} />
            ) : (
              <ExpandMoreRoundedIcon sx={{ fontSize: "1.15rem" }} />
            )}
          </span>
        </button>
      </h1>

      <Collapse in={isOpen} timeout="auto" sx={fillHeight && isOpen ? {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        "& .MuiCollapse-wrapper": { flex: 1 },
        "& .MuiCollapse-wrapperInner": { display: "flex", flexDirection: "column", flex: 1 },
      } : undefined}>
        <div
          id={contentId}
          role="region"
          aria-label={`${section} content`}
          className={`flex min-w-0 gap-4 pt-3 ${fillHeight ? "flex-1" : ""}`}
        >
          {children}
        </div>
      </Collapse>
    </section>
  );
}
