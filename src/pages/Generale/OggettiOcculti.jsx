import React, { useState } from "react";
import { Button } from "@mui/material";
import { oggettiParanormali } from "../../Data/OggettiParanormali";

const RANDOM_ROWS_COUNT = 4;
const RECENT_HISTORY_SIZE = 2;

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function getSignature(rows) {
  return rows
    .map((row) => `${row.Descrizione}__${row.Effetto}`)
    .sort()
    .join("||");
}

function buildShiftCandidates(subset) {
  if (subset.length < 2) {
    return [];
  }

  const shifts = shuffleArray(
    Array.from({ length: subset.length - 1 }, (_, index) => index + 1)
  );

  return shifts.map((shift) => {
    const rows = subset.map((item, index) => ({
      Descrizione: item.Descrizione,
      Effetto: subset[(index + shift) % subset.length].Effetto,
    }));

    return {
      rows,
      signature: getSignature(rows),
    };
  });
}

function buildSubsetPool(items, size) {
  if (items.length < size) {
    return [];
  }

  const shuffled = shuffleArray(items);
  const subsets = [];

  for (let start = 0; start < shuffled.length; start += 1) {
    const subset = [];

    for (let offset = 0; offset < size; offset += 1) {
      subset.push(shuffled[(start + offset) % shuffled.length]);
    }

    subsets.push(subset);
  }

  return subsets;
}

function createRandomTable(items, count, blockedSignatures = []) {
  if (!items || items.length < 2) {
    return { rows: [], signature: "" };
  }

  const realCount = Math.min(count, items.length);
  const blocked = new Set(blockedSignatures.filter(Boolean));
  const subsetPool = buildSubsetPool(items, realCount);

  for (const subset of subsetPool) {
    const candidates = buildShiftCandidates(subset);
    const validCandidate = candidates.find(
      (candidate) => !blocked.has(candidate.signature)
    );

    if (validCandidate) {
      return validCandidate;
    }
  }

  const fallbackSubset = subsetPool[0];
  const fallbackCandidate = buildShiftCandidates(fallbackSubset)[0];

  return fallbackCandidate || { rows: [], signature: "" };
}

function StyledOccultTable({ headers, rows, title, action }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {(title || action) && (
        <div className="mb-3 flex items-center justify-between gap-3">
          {title ? <h3 className="m-0">{title}</h3> : <div />}
          {action}
        </div>
      )}

      <table className="spacing-table" style={{ minWidth: 600, width: "100%" }}>
        <thead>
          <tr className="table-row">
            {headers.map((header, index) => (
              <th key={`${header}-${index}`}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="alternating-row">
              {headers.map((header, cellIndex) => (
                <td key={`${header}-${cellIndex}`}>
                  {Array.isArray(row[header])
                    ? row[header].join(", ")
                    : row[header] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const righeComplete = oggettiParanormali.map((item) => ({
  Nome: item.Nome ?? "",
  Descrizione: item.Descrizione ?? "",
  Effetto: item.Effetto ?? "",
  Origine: item.Origine ?? "",
}));

const elementiRandomizzabili = oggettiParanormali.filter(
  (item) =>
    item.Randomable !== false &&
    item.Descrizione &&
    item.Effetto
);

const initialRandomTable = createRandomTable(
  elementiRandomizzabili,
  RANDOM_ROWS_COUNT
);

export default function OggettiOcculti() {
  const [randomRows, setRandomRows] = useState(initialRandomTable.rows);
  const [currentSignature, setCurrentSignature] = useState(
    initialRandomTable.signature
  );
  const [recentSignatures, setRecentSignatures] = useState([]);

  const handleRandomize = () => {
    const nextTable = createRandomTable(elementiRandomizzabili, RANDOM_ROWS_COUNT, [
      currentSignature,
      ...recentSignatures,
    ]);

    setRecentSignatures((prev) =>
      [currentSignature, ...prev].filter(Boolean).slice(0, RECENT_HISTORY_SIZE)
    );

    setRandomRows(nextTable.rows);
    setCurrentSignature(nextTable.signature);
  };

  return (
    <div className='grid-container'> 
      <StyledOccultTable
        title="Combinazioni casuali"
        headers={["Descrizione", "Effetto"]}
        rows={randomRows}
        action={
          <Button
            variant="outlined"
            onClick={handleRandomize}
            sx={{
              textTransform: "none",
              borderRadius: 0,
            }}
          >
            Randomizza
          </Button>
        }
      />

      <StyledOccultTable
        title="Oggetti paranormali"
        headers={["Nome", "Descrizione", "Effetto", "Origine"]}
        rows={righeComplete}
      />
    </div>
  );
}