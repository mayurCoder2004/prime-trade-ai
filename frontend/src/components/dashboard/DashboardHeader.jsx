import React from 'react';

export default function DashboardHeader({ taskCount, onLogout }) {
  return (
    <header className="panel-glass dashboard-header animate-rise">
      <div className="dashboard-header-row">
        <div className="dashboard-header-copy">
          <p className="eyebrow">Task Command Center</p>
          <h2 className="hero-title dashboard-title">Dashboard</h2>
          <p className="dashboard-subtitle">
            {taskCount} {taskCount === 1 ? 'active task' : 'active tasks'} in your queue.
          </p>
        </div>
        <button onClick={onLogout} className="secondary-action dashboard-logout" type="button">
          Logout
        </button>
      </div>
    </header>
  );
}
