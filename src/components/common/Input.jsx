function Input({ label, ...props }) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      )}
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900
                   focus:outline-none focus:ring-2 focus:ring-primary-500"
        {...props}
      />
    </div>
  );
}

export default Input;
