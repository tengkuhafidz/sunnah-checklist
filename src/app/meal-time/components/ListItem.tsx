interface Props {
  id: string;
  label: string;
  handleChange: (event: any) => void;
}

export default function ListItem({ id, label, handleChange }: Props) {
  return (
    <div className="border px-4 py-3 rounded-lg flex items-center my-2">
      <input
        id={id}
        type="checkbox"
        value={id}
        name={id}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChange}
      />
      <label htmlFor={id} className="ms-2 text-gray-90 w-full font-medium">
        {label}
      </label>
    </div>
  );
}
