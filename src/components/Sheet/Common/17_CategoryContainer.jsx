export default function CategoryContainer({ children, section, paddingOverride = "p-4" }) {
  return (
    <div className={`${paddingOverride}`}>
      <h1 className="text-l font-bold capitalize my-1 text-center">{section}</h1>
      <div className="flex space-x-4">
        {children}
      </div>
    </div>
  )
}
