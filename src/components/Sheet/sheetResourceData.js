import { GnosisData } from "../../Data/Mage/GnosisData";
import { bloodPotencyData } from "../../Data/Vampire/BloodPotencyData";

const parseResourceValues = (value) => {
  const [max = "0", perTurn = "0"] = String(value).split("/");

  return {
    max: max === "Health" ? "Health" : Number(max),
    perTurn: Number(perTurn),
  };
};

const gnosisLookup = Object.fromEntries(
  GnosisData.map((row) => [
    Number(row.Gnosis),
    parseResourceValues(row["Max Mana/Per turn"]),
  ])
);

const bloodPotencyLookup = Object.fromEntries(
  bloodPotencyData.map((row) => [
    Number(row["Blood Potency"]),
    parseResourceValues(row["Max vitae/Max vitae per turn"]),
  ])
);

export function getMageResourceStats(gnosis) {
  return gnosisLookup[Number(gnosis)] || gnosisLookup[1];
}

export function getVampireResourceStats(bloodPotency) {
  return bloodPotencyLookup[Number(bloodPotency)] || bloodPotencyLookup[1];
}
