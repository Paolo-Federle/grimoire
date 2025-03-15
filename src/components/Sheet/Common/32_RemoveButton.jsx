export const RemoveButton = ({ onClick }) => {
    return (
      <button
        className="bg-[#333] hover:bg-[#111] text-white px-2 py-1 rounded text-sm"
        onClick={onClick}
      >
        ✖
      </button>
    );
  };
  