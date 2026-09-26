function Badge({ text, colorClasses = 'bg-gray-100 text-gray-700' }) {
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${colorClasses}`}>
      {text}
    </span>
  );
}

export default Badge;
