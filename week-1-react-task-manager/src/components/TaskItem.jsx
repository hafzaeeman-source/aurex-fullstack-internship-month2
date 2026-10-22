import React, { useState } from "react";

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [error, setError] = useState("");

  function saveEdit(event) {
    event.preventDefault();

    const cleanTitle = editTitle.trim();

    if (!cleanTitle) {
      setError("Task cannot be empty.");
      return;
    }

    onEdit(task.id, cleanTitle);
    setIsEditing(false);
    setError("");
  }

  function cancelEdit() {
    setEditTitle(task.title);
    setIsEditing(false);
    setError("");
  }

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form className="edit-form" onSubmit={saveEdit}>
          <input
            type="text"
            value={editTitle}
            maxLength={120}
            onChange={(event) => {
              setEditTitle(event.target.value);
              setError("");
            }}
            autoFocus
          />

          <button type="submit" className="save-btn">
            Save
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={cancelEdit}
          >
            Cancel
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <>
          <label className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />

            <span className="task-title">{task.title}</span>
          </label>

          <div className="task-actions">
            <button
              type="button"
              className="edit-btn"
              onClick={() => {
                setEditTitle(task.title);
                setIsEditing(true);
              }}
            >
              Edit
            </button>

            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}