import React, { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const STORAGE_KEY = "aurexReactDoListTasks";

function loadTasks() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  function editTask(id, updatedTitle) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, title: updatedTitle }
          : task
      )
    );
  }

  function clearCompleted() {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => !task.completed)
    );
  }

  function deleteAll() {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
    }
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="app-shell">
      <section className="app-card">
        <Header count={tasks.length} />

        <TaskForm onAddTask={addTask} />

        <section className="toolbar">
          <div className="filters">
            {["all", "active", "completed"].map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-btn ${
                  filter === item ? "active" : ""
                }`}
                onClick={() => setFilter(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="clear-btn"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        </section>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />

        <footer className="app-footer">
          <span>Tasks are saved in your browser.</span>

          <button
            type="button"
            className="reset-btn"
            onClick={deleteAll}
          >
            Delete All Tasks
          </button>
        </footer>
      </section>
    </main>
  );
}