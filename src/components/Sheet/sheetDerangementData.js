import { PATHS } from "../../pages/path";
import { slugify } from "../../utils";

let catalogPromise;

export function loadDerangementCatalog() {
  if (!catalogPromise) {
    catalogPromise = import("../../Data/DerangementsData")
      .then(({ derangementData }) => {
        const items = derangementData
          .filter((item) => item?.Name)
          .map((item, index) => ({
            id: `derangement-${index}`,
            name: item.Name,
            label: item?.Severity ? `${item.Name} (${item.Severity})` : item.Name,
            detailPath: `${PATHS.DERANGEMENTS}/${slugify(`${item.Name}-${index}`)}`,
          }));

        return {
          options: items.map((item) => ({ value: item.id, label: item.label })),
          pathById: new Map(items.map((item) => [item.id, item.detailPath])),
          idByName: new Map(
            items.map((item) => [String(item.name).trim().toLowerCase(), item.id])
          ),
        };
      })
      .catch((error) => {
        catalogPromise = undefined;
        throw error;
      });
  }

  return catalogPromise;
}
