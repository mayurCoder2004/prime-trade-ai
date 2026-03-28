import React from 'react';

export default function TaskFormCard({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onSubmit,
  error,
  success,
}) {
  return (
    <section className="panel-glass dashboard-card dashboard-form-card animate-rise-delayed">
      <h3 className="section-title dashboard-section-title">Create Task</h3>
      <form onSubmit={onSubmit} className="task-form">
        <label className="field-wrap">
          <span className="field-label">Title</span>
          <input
            className="input-field"
            placeholder="Task title"
            value={title}
            onChange={onTitleChange}
            required
          />
        </label>
        <label className="field-wrap">
          <span className="field-label">Description</span>
          <input
            className="input-field"
            placeholder="Short description"
            value={description}
            onChange={onDescriptionChange}
          />
        </label>
        <button className="primary-action dashboard-primary" type="submit">
          Add Task
        </button>
      </form>
      {error && <div className="alert alert-error mt-4 text-sm">{error}</div>}
      {success && <div className="alert alert-success mt-4 text-sm">{success}</div>}
    </section>
  );
}
