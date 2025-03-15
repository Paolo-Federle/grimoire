import { DotMarkers } from "./40_DotMarkers";

export default function TitleDots({ name, min, max, value, modifier, onChange, onOpenDrawer }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-24 font-bold capitalize text-sm">{name}</span>
      <DotMarkers min={min} max={max} value={value} modifier={modifier} onChange={onChange} />
      <span className="text-gray-500 cursor-pointer" onClick={onOpenDrawer}>
        (+{modifier})
      </span>
    </div>
  );
}
