import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TaskContext } from '../context/TaskContext';
import Navbar from '../components/common/Navbar';
import TaskStats from '../components/task/TaskStats';
import TaskFilters from '../components/task/TaskFilters';
import TaskList from '../components/task/TaskList';
import TaskForm from '../components/task/TaskForm';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const { tasks, deleteTask } = useContext(TaskContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleCreateNew = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Welcome, {currentUser?.name}</h2>
            <p className="text-sm text-gray-500">Here are your tasks</p>
          </div>
          <Button variant="primary" onClick={handleCreateNew}>
            + Create Task
          </Button>
        </div>

        <TaskStats tasks={tasks} />

        <TaskFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <TaskList
          tasks={filteredTasks}
          showActions={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
      >
        <TaskForm existingTask={editingTask} onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default Dashboard;
