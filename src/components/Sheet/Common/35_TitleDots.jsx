import { DotMarkers } from "./40_DotMarkers";

export default function TitleDots({ name, min, max, value, modifier, onChange, trailing = null }) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <span className="w-24 font-bold capitalize text-sm">{name}</span>
      <DotMarkers min={min} max={max} value={value} modifier={modifier} onChange={onChange} />
      {trailing ? <span className="ml-auto inline-flex shrink-0">{trailing}</span> : null}
    </div>
  );
}
