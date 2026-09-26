import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import Navbar from '../components/common/Navbar';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { formatDate, priorityColor, statusColor } from '../utils/helpers';

function TaskDetailsPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useContext(TaskContext);

  const task = getTaskById(taskId);

  if (!task) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="p-6 text-center text-gray-500">
          <p>Task not found.</p>
          <Button variant="outline" onClick={() => navigate(-1)} className="mt-4">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const handleStatusChange = (newStatus) => {
    updateTask(task.id, { status: newStatus });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="p-4 sm:p-6 max-w-3xl mx-auto">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
          ← Back
        </Button>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <h1 className="text-xl font-bold text-gray-800">{task.title}</h1>
            <Badge text={task.priority} colorClasses={priorityColor(task.priority)} />
          </div>

          <p className="text-gray-600 mt-3">{task.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <div>
              <p className="text-gray-400">Status</p>
              <Badge text={task.status} colorClasses={statusColor(task.status)} />
            </div>
            <div>
              <p className="text-gray-400">Due Date</p>
              <p className="text-gray-700 font-medium">{formatDate(task.dueDate)}</p>
            </div>
            <div>
              <p className="text-gray-400">Created On</p>
              <p className="text-gray-700 font-medium">{formatDate(task.createdAt)}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Update Status</p>
            <div className="flex flex-wrap gap-2">
              {task.status === 'Create' && (
                <Button variant="success" onClick={() => handleStatusChange('In Progress')}>
                  Start Task
                </Button>
              )}
              {task.status === 'In Progress' && (
                <Button variant="success" onClick={() => handleStatusChange('Completed')}>
                  Mark Completed
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
