import { DotMarker } from "./50_DotMarker";

export const DotMarkers = ({ 
  max = 5, 
  min = 1, 
  value, 
  modifier, 
  onChange,
  filledColor = "bg-black border-black",
  modifierColor = "bg-green-500 border-green-500",
  negativeModifierColor = "bg-red-500 border-red-500"
}) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(max)].map((_, i) => {
        const isFilled = i < value;
        const isModifierPositive = modifier > 0 && i >= value && i < value + modifier;
        const isModifierNegative = modifier < 0 && i < value && i >= value + modifier; 

        return (
          <DotMarker
            key={i}
            filled={isFilled}
            modifier={isModifierPositive || isModifierNegative}
            onClick={() => onChange(i + 1 === value ? min : i + 1)}
            filledColor={filledColor}
            modifierColor={isModifierNegative ? negativeModifierColor : modifierColor}
          />
        );
      })}
    </div>
  );
};
