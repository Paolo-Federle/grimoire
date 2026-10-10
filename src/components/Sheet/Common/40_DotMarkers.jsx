import { DotMarker } from "./50_DotMarker";
import { useSheetView } from "../05_SheetDataContext";

export const DotMarkers = ({ 
  max = 5, 
  min = 1,
  editableMax = max,
  ariaLabel,
  wrap = false,
  value, 
  modifier, 
  onChange,
  dotClassName = "",
  filledColor = "bg-black border-black",
  modifierColor = "bg-green-500 border-green-500",
  negativeModifierColor = "bg-red-500 border-red-500"
}) => {
  const { mode } = useSheetView();
  return (
    <div className={`flex ${wrap ? "mt-0.5 min-w-0 flex-wrap gap-px" : "shrink-0 gap-0.5"}`} role={ariaLabel ? "group" : undefined} aria-label={ariaLabel}>
      {[...Array(max)].map((_, i) => {
        const isFilled = i < value;
        const isModifierPositive = modifier > 0 && i >= value && i < value + modifier;
        const isModifierNegative = modifier < 0 && i < value && i >= value + modifier; 

        return (
          <DotMarker
            key={i}
            filled={isFilled}
            modifier={isModifierPositive || isModifierNegative}
            onClick={mode === "play" || i >= editableMax ? undefined : () => onChange(i + 1 === value ? min : i + 1)}
            dotClassName={`${dotClassName} ${wrap ? "shrink-0" : ""}`}
            filledColor={filledColor}
            modifierColor={isModifierNegative ? negativeModifierColor : modifierColor}
          />
        );
      })}
    </div>
  );
};
