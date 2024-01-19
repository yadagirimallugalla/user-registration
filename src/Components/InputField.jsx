export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  defaultValue,
}) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}
