import { LegacyIndexData } from "./LegacyIndexData";

const legacyIndexById = new Map(
  LegacyIndexData.map((legacy) => [legacy.Id, legacy])
);

let legacyDetailsPromise;

function loadLegacyDetails() {
  legacyDetailsPromise ??= import("./LegacyData").then(
    ({ LegacyDetails }) => LegacyDetails
  );

  return legacyDetailsPromise;
}

export async function loadLegacyDetailById(id) {
  const indexEntry = legacyIndexById.get(id);
  if (!indexEntry) {
    return null;
  }

  const legacyDetails = await loadLegacyDetails();
  const detail = legacyDetails[indexEntry.Id];

  return detail ? { ...indexEntry, ...detail } : null;
}
