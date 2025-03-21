export const ModifierControl = ({ modifier, onChange }) => {
  return (
    <div className="flex items-center">
      <button className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-300" onClick={() => onChange(-1)}>
        -
      </button>
      <span className="w-6 text-center">{modifier}</span>
      <button className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-300" onClick={() => onChange(1)}>
        +
      </button>
    </div>
  );
};