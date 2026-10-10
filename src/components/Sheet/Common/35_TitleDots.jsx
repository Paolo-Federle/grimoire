import { DotMarkers } from "./40_DotMarkers";

export default function TitleDots({ name, min, max, value, modifier, onChange, trailing = null, editableMax, dotsLabel, aligned = false }) {
  return (
    <div className={aligned ? "grid min-h-11 w-full min-w-0 grid-cols-[5.75rem_minmax(0,1fr)_4rem] items-start gap-x-1.5 py-1" : "flex min-w-0 items-center gap-2"}>
      <span className={`${aligned ? "min-w-0 break-words" : "w-24 shrink-0"} text-sm font-medium capitalize text-gray-800`}>{name}</span>
      <DotMarkers min={min} max={max} editableMax={editableMax} ariaLabel={dotsLabel} value={value} modifier={modifier} onChange={onChange} wrap={aligned} />
      {trailing ? <span className="ml-auto inline-flex shrink-0">{trailing}</span> : null}
    </div>
  );
}
