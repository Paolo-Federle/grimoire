import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DesktopManyHeadersTable from "./DesktopManyHeadersTable";
import MobileManyHeadersTable from "./MobileManyHeadersTable";
import { getCurrentRoutePath } from "../../utils";

export default function ManyHeadersTable({
  title,
  headers,
  table,
  headerCheckFields = [],
  alternateData = [],
  activeRowLink = false,
  prereqForLink,
}) {
  const [isSectionActive, setIsSectionActive] = useState(true);
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 770;

  const sourcePath = getCurrentRoutePath();

  const tableHeaders =
    headers || Object.keys(table[0] || {}).filter((h) => h !== "link");

  // campi salvati nei preferiti: quelli visibili (escludo link tecnico)
  const columnsToSave = (tableHeaders || []).filter((h) => h !== "link");

  const toggleSection = () => setIsSectionActive((prev) => !prev);

  const isHeaderRow = (row) =>
    headerCheckFields.length > 0 &&
    headerCheckFields.every((field) => row[field] === "N/A");

  const getHeaderRowData = (row) =>
    alternateData.reduce((acc, key) => {
      acc[key] = row[key];
      return acc;
    }, {});

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    navigate(link);
  };

  const sharedProps = {
    table,
    tableHeaders,
    columnsToSave,
    sourcePath,
    isHeaderRow,
    getHeaderRowData,
    activeRowLink,
    prereqForLink,
    handleLinkClick,
    alternateData,
  };

  return (
    <div>
      <h1
        onClick={toggleSection}
        className="text-2xl cursor-pointer flex items-center gap-1"
      >
        {title} {isSectionActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </h1>

      {isSectionActive && (
        <>
          {!isMobile && <DesktopManyHeadersTable {...sharedProps} />}
          {isMobile && <MobileManyHeadersTable {...sharedProps} />}
        </>
      )}
    </div>
  );
}
