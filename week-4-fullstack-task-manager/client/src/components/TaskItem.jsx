
import { useState } from "react";

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onUpdate
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [busy, setBusy] = useState(false);

  const runAction = async (action) => {
    setBusy(true);

    try {
      await action();
    } catch {
      // Dashboard displays the request error.
    } finally {
      setBusy(false);
    }
  };

  const saveEdit = async () => {
    if (!title.trim()) return;

    await runAction(async () => {
      await onUpdate(task._id, { title: title.trim() });
      setEditing(false);
    });
  };

  return (
    <div className={`task-item ${task.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        disabled={busy}
        onChange={() =>
          runAction(() => onToggle(task))
        }
      />

      {editing ? (
        <input
          className="edit-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}

      <div className="task-actions">
        {editing ? (
          <>
            <button disabled={busy} onClick={saveEdit}>
              Save
            </button>
            <button
              disabled={busy}
              onClick={() => {
                setTitle(task.title);
                setEditing(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button disabled={busy} onClick={() => setEditing(true)}>
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          disabled={busy}
          onClick={() => runAction(() => onDelete(task._id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
