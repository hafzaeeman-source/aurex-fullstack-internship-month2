
import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdate, onDelete, busy }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add your first task!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          busy={busy}
        />
      ))}
    </div>
  );
}

export default TaskList;
