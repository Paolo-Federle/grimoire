import { DotMarkers } from "./40_DotMarkers";

export default function TitleDots({ name, min, max, value, modifier, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 font-bold capitalize text-sm">{name}</span>
      <DotMarkers min={min} max={max} value={value} modifier={modifier} onChange={onChange} />
    </div>
  );
}
