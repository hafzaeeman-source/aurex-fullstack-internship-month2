
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../services/taskApi";

export default function Dashboard() {
  const { user, token, logout } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTasks = useCallback(async () => {
    try {
      setError("");
      const data = await getTasks(token);
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleAdd = async (title) => {
    try {
      setError("");
      const task = await createTask(title, token);
      setTasks((prev) => [task, ...prev]);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const handleUpdate = async (id, updates) => {
    try {
      setError("");
      const updated = await updateTask(id, updates, token);

      setTasks((prev) =>
        prev.map((task) => (task._id === id ? updated : task))
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const handleToggle = async (task) => {
    await handleUpdate(task._id, {
      completed: !task.completed
    });
  };

  const handleDelete = async (id) => {
    try {
      setError("");
      await deleteTask(id, token);

      setTasks((prev) =>
        prev.filter((task) => task._id !== id)
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <div className="brand">AUREX</div>
          <p>Full Stack Task Manager</p>
        </div>

        <div className="header-user">
          <span>Hello, {user?.name}</span>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-container">
        <div className="dashboard-intro">
          <h1>My Task Dashboard</h1>
          <p>Stay organized and make every day productive.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Tasks</h3>
            <strong>{tasks.length}</strong>
          </div>

          <div className="stat-card">
            <h3>Completed</h3>
            <strong>{completed}</strong>
          </div>

          <div className="stat-card">
            <h3>Pending</h3>
            <strong>{pending}</strong>
          </div>
        </div>

        <section className="task-section">
          <h2>Add New Task</h2>
          <TaskForm onAdd={handleAdd} />
        </section>

        <section className="task-section">
          <div className="section-heading">
            <h2>My Tasks</h2>

            <div className="filters">
              {["all", "pending", "completed"].map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          {loading ? (
            <p>Loading tasks...</p>
          ) : (
            <TaskList
              tasks={filteredTasks}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          )}
        </section>
      </main>
    </div>
  );
}
