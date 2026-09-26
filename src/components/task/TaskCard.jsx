import { useNavigate } from 'react-router-dom';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { formatDate, priorityColor, statusColor, isOverdue } from '../../utils/helpers';

function TaskCard({ task, showActions = false, onEdit, onDelete }) {
  const navigate = useNavigate();
  const overdue = isOverdue(task.dueDate, task.status);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-150">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-800">{task.title}</h3>
        <Badge text={task.priority} colorClasses={priorityColor(task.priority)} />
      </div>

      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{task.description}</p>

      <div className="flex items-center flex-wrap gap-2 mt-3">
        <Badge text={task.status} colorClasses={statusColor(task.status)} />
        {overdue && <Badge text="Overdue" colorClasses="bg-red-100 text-red-700" />}
      </div>

      <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
        <span>Due: {formatDate(task.dueDate)}</span>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Button variant="outline" onClick={() => navigate(`/task/${task.id}`)} className="!py-1.5 !px-3 text-xs">
          View Details
        </Button>

        {showActions && (
          <>
            <Button variant="secondary" onClick={() => onEdit(task)} className="!py-1.5 !px-3 text-xs">
              Edit
            </Button>
            <Button variant="danger" onClick={() => onDelete(task.id)} className="!py-1.5 !px-3 text-xs">
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
