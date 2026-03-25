import React, { useEffect, useState } from "react";
import FavoriteToggle from "./FavoriteToggle";
import { getCurrentRoutePath } from "../utils";
import { BookLink } from "./BookLink";

function dots(value) {
  if (value === null || value === undefined) return "";

  if (typeof value === "string" && value.includes("-")) {
    const [start, end] = value.split("-").map((v) => Number(v.trim()));

    if (Number.isFinite(start) && Number.isFinite(end) && start > 0 && end > 0) {
      return `${"•".repeat(start)} - ${"•".repeat(end)}`;
    }

    return value;
  }

  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) return "";
  return "•".repeat(numericValue);
}

function normalizeName(value) {
  return String(value || "").trim().toLowerCase();
}

function renderSimpleValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value === null || value === undefined) return "";
  return String(value);
}

function buildFavoriteRankRow(selectedCombination, rank, sourcePath) {
  const manifestation = selectedCombination?.Manifestation || "";
  const key = selectedCombination?.Key || "";
  const rankValue = rank?.dot || "";
  const summary = rank?.summary || "";

  return {
    Manifestation: manifestation,
    Key: key,
    Rank: rankValue,
    Summary: summary,
    __favKey: `${sourcePath}#${manifestation}::${key}::${rankValue}::${summary}`,
  };
}

export default function ManifestationWikiBrowser({
  manifestations = [],
  keysData = [],
  manifestationKeys = [],
  title = "Manifestations / Keys",
}) {
  const [selectedManifestationName, setSelectedManifestationName] = useState(
    manifestations[0]?.Name || ""
  );
  const [selectedKeyName, setSelectedKeyName] = useState("");

  const sourcePath = getCurrentRoutePath();
  const favoriteRankColumns = ["Manifestation", "Key", "Rank", "Summary"];

  const manifestationOptions = manifestations.map((manifestation) => {
    const relatedCount = manifestationKeys.filter(
      (item) =>
        normalizeName(item.Manifestation) === normalizeName(manifestation.Name)
    ).length;

    return {
      ...manifestation,
      relatedCount,
    };
  });

  const selectedManifestation =
    manifestations.find(
      (item) =>
        normalizeName(item.Name) === normalizeName(selectedManifestationName)
    ) || null;

  const relatedCombos = selectedManifestationName
    ? manifestationKeys.filter(
        (item) =>
          normalizeName(item.Manifestation) ===
          normalizeName(selectedManifestationName)
      )
    : [];

  const uniqueKeyNames = [...new Set(relatedCombos.map((item) => item.Key))];

  const keysForSelectedManifestation = uniqueKeyNames.map((keyName) => {
    const keyInfo =
      keysData.find((key) => normalizeName(key.Name) === normalizeName(keyName)) ||
      null;

    const firstCombo =
      relatedCombos.find(
        (combo) => normalizeName(combo.Key) === normalizeName(keyName)
      ) || null;

    return {
      Name: keyInfo?.Name || keyName,
      Skills: keyInfo?.Skills || (firstCombo?.Skill ? [firstCombo.Skill] : []),
      Summary: keyInfo?.Summary || "",
      Content: keyInfo?.Content || [],
      Book: keyInfo?.Book || firstCombo?.Book || "",
    };
  });

  useEffect(() => {
    if (!keysForSelectedManifestation.length) {
      setSelectedKeyName("");
      return;
    }

    const keyStillExists = keysForSelectedManifestation.some(
      (item) => normalizeName(item.Name) === normalizeName(selectedKeyName)
    );

    if (!keyStillExists) {
      setSelectedKeyName(keysForSelectedManifestation[0].Name);
    }
  }, [keysForSelectedManifestation, selectedKeyName]);

  const selectedKey =
    keysForSelectedManifestation.find(
      (item) => normalizeName(item.Name) === normalizeName(selectedKeyName)
    ) || null;

  const selectedCombination =
    manifestationKeys.find(
      (item) =>
        normalizeName(item.Manifestation) ===
          normalizeName(selectedManifestationName) &&
        normalizeName(item.Key) === normalizeName(selectedKeyName)
    ) || null;

  const renderDetailPanel = () => (
    <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-[#f7f7f7]">
      <div className="shrink-0 border-b border-[#c7c7c7] bg-[#efefef] px-4 py-4 sm:px-5 sm:py-[18px]">
        {selectedCombination ? (
          <>
            <h2 className="font-serif text-[22px] font-bold leading-tight text-[#161616] sm:text-[26px]">
              {selectedCombination.Manifestation} — {selectedCombination.Key}
            </h2>

            <div className="mt-2 text-[13px] text-[#5f5f5f]">
              {selectedManifestation?.Attribute || "-"} +{" "}
              {selectedCombination.Skill || renderSimpleValue(selectedKey?.Skills)}
            </div>

            {selectedCombination?.Summary && (
              <p className="mt-2 text-[14px] leading-6 text-[#161616]">
                {selectedCombination.Summary}
              </p>
            )}

            {selectedCombination?.Book && (
              <div className="mt-2 text-[14px] leading-6 text-[#161616]">
                {BookLink(selectedCombination.Book)}
              </div>
            )}
          </>
        ) : (
          <div className="text-[13px] text-[#5f5f5f]">
            Select a Manifestation and a Key
          </div>
        )}
      </div>

      <div
        className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5"
        style={{ scrollbarGutter: "stable" }}
      >
        {selectedCombination?.Ranks?.length ? (
          <div className="grid gap-3">
            {selectedCombination.Ranks.map((rank, index) => {
              const favoriteRow = buildFavoriteRankRow(
                selectedCombination,
                rank,
                sourcePath
              );

              return (
                <div
                  key={`${rank.dot}-${index}`}
                  className="overflow-hidden rounded-[4px] border border-[#c7c7c7] bg-[#e8e8e8]"
                >
                  <div className="flex items-center justify-between gap-3 bg-[#d5d5d5] px-4 py-[10px]">
                    <div className="font-semibold text-[#2f2f2f]">
                      Rank {dots(rank.dot)}
                    </div>

                    <FavoriteToggle
                      row={favoriteRow}
                      columns={favoriteRankColumns}
                      sourcePath={sourcePath}
                      titleIsLink={false}
                    />
                  </div>

                  <div className="px-4 py-3 text-[13px] leading-7 text-[#161616]">
                    {rank.summary}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-[13px] text-[#5f5f5f]">No rank data</div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-full xl:w-[1600px]">
        {title && (
          <h1 className="mb-4 font-serif text-[28px] font-bold text-[#161616] sm:text-[32px]">
            {title}
          </h1>
        )}

        <div className="overflow-hidden border border-[#c7c7c7] bg-[#efefef]">
          {/* Mobile / tablet */}
          <div className="block xl:hidden">
            <div className="border-b border-[#c7c7c7] bg-[#ececec] p-4">
              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="manifestation-select"
                    className="mb-2 block text-[13px] font-semibold text-[#161616]"
                  >
                    Manifestation
                  </label>
                  <select
                    id="manifestation-select"
                    value={selectedManifestationName}
                    onChange={(e) => setSelectedManifestationName(e.target.value)}
                    className="w-full rounded-[4px] border border-[#bdbdbd] bg-white px-3 py-2 text-[14px] text-[#161616] outline-none"
                  >
                    {manifestationOptions.map((item, index) => (
                      <option key={`${item.Name}-${index}`} value={item.Name}>
                        {item.Name}
                      </option>
                    ))}
                  </select>

                  {selectedManifestation?.Summary && (
                    <div className="mt-2 text-[12px] leading-5 text-[#666666]">
                      {selectedManifestation.Summary}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="key-select"
                    className="mb-2 block text-[13px] font-semibold text-[#161616]"
                  >
                    Key
                  </label>
                  <select
                    id="key-select"
                    value={selectedKeyName}
                    onChange={(e) => setSelectedKeyName(e.target.value)}
                    className="w-full rounded-[4px] border border-[#bdbdbd] bg-white px-3 py-2 text-[14px] text-[#161616] outline-none"
                    disabled={!keysForSelectedManifestation.length}
                  >
                    {!keysForSelectedManifestation.length ? (
                      <option value="">No keys available</option>
                    ) : (
                      keysForSelectedManifestation.map((item, index) => (
                        <option key={`${item.Name}-${index}`} value={item.Name}>
                          {item.Name}
                        </option>
                      ))
                    )}
                  </select>

                  {selectedKey?.Summary && (
                    <div className="mt-2 text-[12px] leading-5 text-[#666666]">
                      {selectedKey.Summary}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {renderDetailPanel()}
          </div>

          {/* Desktop */}
          <div className="hidden xl:grid xl:h-[700px] xl:grid-cols-[320px_320px_minmax(0,1fr)] xl:items-stretch">
            <div className="flex min-h-0 w-[320px] min-w-[320px] max-w-[320px] flex-col overflow-hidden border-r border-[#c7c7c7] bg-[#ececec]">
              <div className="shrink-0 bg-[#2f2f2f] px-4 py-[10px] text-[14px] font-bold text-white">
                Manifestations
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto"
                style={{ scrollbarGutter: "stable" }}
              >
                {manifestationOptions.map((item, index) => {
                  const isActive =
                    normalizeName(item.Name) ===
                    normalizeName(selectedManifestationName);

                  return (
                    <button
                      key={`${item.Name}-${index}`}
                      type="button"
                      onClick={() => setSelectedManifestationName(item.Name)}
                      className={`block w-full overflow-hidden border-0 border-b border-[#c7c7c7] px-4 py-[14px] text-left transition-colors ${
                        isActive
                          ? "bg-[#d5d5d5]"
                          : "bg-[#ececec] hover:bg-[#e3e3e3]"
                      }`}
                    >
                      <div className="truncate font-semibold text-[#161616]">
                        {item.Name}
                      </div>

                      <div className="mt-1 truncate text-[12px] text-[#5f5f5f]">
                        {item.Attribute}
                      </div>

                      <div className="mt-1 overflow-hidden text-[12px] leading-5 text-[#777777] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                        {item.Summary}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex min-h-0 w-[320px] min-w-[320px] max-w-[320px] flex-col overflow-hidden border-r border-[#c7c7c7] bg-[#ececec]">
              <div className="shrink-0 bg-[#2f2f2f] px-4 py-[10px] text-[14px] font-bold text-white">
                Keys
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto"
                style={{ scrollbarGutter: "stable" }}
              >
                {!selectedManifestation && (
                  <div className="p-4 text-[13px] text-[#5f5f5f]">
                    Select a Manifestation
                  </div>
                )}

                {selectedManifestation &&
                  keysForSelectedManifestation.map((item, index) => {
                    const isActive =
                      normalizeName(item.Name) === normalizeName(selectedKeyName);

                    return (
                      <button
                        key={`${item.Name}-${index}`}
                        type="button"
                        onClick={() => setSelectedKeyName(item.Name)}
                        className={`block w-full overflow-hidden border-0 border-b border-[#c7c7c7] px-4 py-[14px] text-left transition-colors ${
                          isActive
                            ? "bg-[#d5d5d5]"
                            : "bg-[#ececec] hover:bg-[#e3e3e3]"
                        }`}
                      >
                        <div className="truncate font-semibold text-[#161616]">
                          {item.Name}
                        </div>

                        <div className="mt-1 truncate text-[12px] text-[#5f5f5f]">
                          {renderSimpleValue(item.Skills)}
                        </div>

                        <div className="mt-1 overflow-hidden text-[12px] leading-5 text-[#777777] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                          {item.Summary}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>

            {renderDetailPanel()}
          </div>
        </div>
      </div>
    </div>
  );
}