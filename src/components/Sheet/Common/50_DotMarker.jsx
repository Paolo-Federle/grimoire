export const DotMarker = ({ filled, modifier, onClick, filledColor, modifierColor }) => {
  return (
    <div
      className={`w-3 h-4 rounded-full cursor-pointer border-2 transition-all ${
        modifier ? modifierColor : filled ? filledColor : "bg-transparent border-gray-400"
      }`}
      onClick={onClick}
    />
  );
};
