export const DotMarker = ({ filled, modifier, onClick }) => (
    <div
      className={`w-3 h-4 rounded-full cursor-pointer border-2 transition-all ${
        filled ? "bg-black border-black" : modifier ? "bg-green-500 border-green-500" : "bg-transparent border-gray-400"
      }`}
      onClick={onClick}
    />
  );