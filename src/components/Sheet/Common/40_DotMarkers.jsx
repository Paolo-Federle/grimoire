import {DotMarker} from "./50_DotMarker"

export const DotMarkers = ({ 
  max = 5, 
  min = 1, 
  value, 
  modifier, 
  onChange,
  filledColor = "bg-black border-black",
  modifierColor = "bg-green-500 border-green-500"
}) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(max)].map((_, i) => (
        <DotMarker
          key={i}
          filled={i < value}
          modifier={i >= value && i < value + modifier}
          onClick={() => onChange(i + 1 === value ? min : i + 1)}
          filledColor={filledColor}
          modifierColor={modifierColor}
        />
      ))}
    </div>
  );
};
