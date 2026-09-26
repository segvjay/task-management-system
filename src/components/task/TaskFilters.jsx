function TaskFilters({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, priorityFilter, setPriorityFilter }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900
                   focus:outline-none focus:ring-2 focus:ring-primary-500"
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900
                   focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <option value="All">All Status</option>
        <option value="Create">Create</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900
                   focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default TaskFilters;
