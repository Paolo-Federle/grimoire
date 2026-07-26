import { useSheetView } from "../05_SheetDataContext";

export const RemoveButton = ({ onClick, className = "" }) => {
  const { mode } = useSheetView();
  return (
    <button
      type="button"
      disabled={mode === "play"}
      className={`bg-[#333] hover:bg-[#111] text-white px-2 py-1 rounded text-sm ${className}`}
      onClick={onClick}
    >
      ✖
    </button>
  );
};
