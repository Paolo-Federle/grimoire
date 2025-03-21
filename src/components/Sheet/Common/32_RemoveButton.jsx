export const RemoveButton = ({ onClick, className = "" }) => {
  return (
    <button
      className={`bg-[#333] hover:bg-[#111] text-white px-2 py-1 rounded text-sm ${className}`}
      onClick={onClick}
    >
      ✖
    </button>
  );
};
