export const ModifierControl = ({ modifier, onChange, compact = false }) => {
  return (
    <div className={`flex shrink-0 items-center ${compact ? "gap-0.5" : "gap-1"}`}>
      <button type="button" title="Decrease modifier" className={`flex ${compact ? "h-5 w-5" : "h-6 w-6"} items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400`} onClick={() => onChange(-1)}>
        -
      </button>
      <span className="w-5 text-center text-xs font-medium tabular-nums text-gray-600">{modifier}</span>
      <button type="button" title="Increase modifier" className={`flex ${compact ? "h-5 w-5" : "h-6 w-6"} items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400`} onClick={() => onChange(1)}>
        +
      </button>
    </div>
  );
};
