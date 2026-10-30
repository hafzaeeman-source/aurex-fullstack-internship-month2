
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} from "./services/taskApi";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const handleAdd = async (title) => {
    setBusy(true);
    setError("");

    try {
      const task = await addTask(title);
      setTasks((prev) => [...prev, task]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setBusy(false);
    }
  };

  const handleUpdate = async (id, changes) => {
    setBusy(true);
    setError("");

    try {
      const updated = await updateTask(id, changes);
      setTasks((prev) =>
        prev.map((task) => task.id === id ? updated : task)
      );
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (id) => {
    setBusy(true);
    setError("");

    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const completed = tasks.filter((task) => task.completed).length;

  return (
    <div className="app-page">
      <div className="task-container">
        <div className="app-header">
          <span className="eyebrow">AUREX INTERNSHIP • WEEK 04</span>
          <h1>Task Manager</h1>
          <p>Organize your day, one task at a time.</p>
        </div>

        <div className="stats">
          <div>
            <strong>{tasks.length}</strong>
            <span>Total Tasks</span>
          </div>
          <div>
            <strong>{completed}</strong>
            <span>Completed</span>
          </div>
          <div>
            <strong>{tasks.length - completed}</strong>
            <span>Pending</span>
          </div>
        </div>

        <TaskForm onAdd={handleAdd} busy={busy} />

        {error && <p className="error-message">{error}</p>}

        {loading ? (
          <p className="empty-message">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            busy={busy}
          />
        )}
      </div>
    </div>
  );
}

export default App;
