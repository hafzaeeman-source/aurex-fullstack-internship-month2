
import { useState } from "react";

function TaskItem({ task, onUpdate, onDelete, busy }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const saveEdit = async () => {
    if (!title.trim()) return;

    const success = await onUpdate(task.id, { title: title.trim() });

    if (success) setEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        disabled={busy}
        onChange={() =>
          onUpdate(task.id, { completed: !task.completed })
        }
      />

      {editing ? (
        <input
          className="edit-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={busy}
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}

      <div className="task-actions">
        {editing ? (
          <>
            <button onClick={saveEdit} disabled={busy || !title.trim()}>
              Save
            </button>
            <button onClick={() => {
              setTitle(task.title);
              setEditing(false);
            }} disabled={busy}>
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setEditing(true)} disabled={busy}>
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
          disabled={busy}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
