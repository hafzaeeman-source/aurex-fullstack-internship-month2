
import { useState } from "react";

function TaskForm({ onAdd, busy }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const success = await onAdd(title.trim());

    if (success) setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={busy}
      />
      <button type="submit" disabled={busy || !title.trim()}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
