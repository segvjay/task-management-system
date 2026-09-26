function StatCard({ label, value, colorClasses }) {
  return (
    <div className={`rounded-xl p-4 shadow-sm border border-gray-200 ${colorClasses}`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm mt-1 opacity-80">{label}</p>
    </div>
  );
}

function TaskStats({ tasks }) {
  const total = tasks.length;
  const created = tasks.filter((t) => t.status === 'Create').length;
  const inProgress = tasks.filter((t) => t.status === 'In Progress').length;
  const completed = tasks.filter((t) => t.status === 'Completed').length;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      <StatCard label="Total Tasks" value={total} colorClasses="bg-white text-gray-800" />
      <StatCard label="Create" value={created} colorClasses="bg-gray-50 text-gray-700" />
      <StatCard label="In Progress" value={inProgress} colorClasses="bg-blue-50 text-blue-700" />
      <StatCard label="Completed" value={completed} colorClasses="bg-green-50 text-green-700" />
    </div>
  );
}

export default TaskStats;
