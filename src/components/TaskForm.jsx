import React, { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanTitle = title.trim();

    if (!cleanTitle) {
      setError("Please enter a task.");
      return;
    }

    onAddTask(cleanTitle);
    setTitle("");
    setError("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={title}
          maxLength={120}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
        />

        <button type="submit" className="primary-btn">
          + Add Task
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}