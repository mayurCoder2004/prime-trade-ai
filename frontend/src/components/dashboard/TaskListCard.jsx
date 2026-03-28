import React from 'react';

export default function TaskListCard({ tasks, onDelete }) {
  return (
    <section className="panel-glass dashboard-card dashboard-list-card animate-rise-delayed-2">
      <div className="task-list-head">
        <h3 className="section-title dashboard-section-title dashboard-section-title-inline">Task Queue</h3>
        <span className="badge">{tasks.length} total</span>
      </div>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-title">No tasks yet</p>
          <p className="empty-copy">Create your first task to start building momentum.</p>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-card">
              <div className="task-body">
                <p className="task-title">{task.title}</p>
                {task.description && <p className="task-description">{task.description}</p>}
              </div>
              <button onClick={() => onDelete(task._id)} className="danger-link" type="button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
