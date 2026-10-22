import React from "react";

export default function Header({ count }) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">AUREX • MONTH 2 • WEEK 1</p>
        <h1>DoList</h1>
        <p className="subtitle">
          Your original JavaScript task manager,
          rebuilt using React components and state.
        </p>
      </div>

      <div className="task-count" aria-live="polite">
        <strong>{count}</strong>
        <span>tasks</span>
      </div>
    </header>
  );
}