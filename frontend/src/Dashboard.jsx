import React, { useState, useEffect } from 'react';
import DecorBackground from './components/layout/DecorBackground.jsx';
import DashboardHeader from './components/dashboard/DashboardHeader.jsx';
import TaskFormCard from './components/dashboard/TaskFormCard.jsx';
import TaskListCard from './components/dashboard/TaskListCard.jsx';

export default function Dashboard({ token, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchTasks = async () => {
    setError('');
    try {
      const res = await fetch('/api/v1/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setTasks(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setSuccess('Task created!');
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    setError('');
    setSuccess('');
    try {
      const res = await fetch(`/api/v1/tasks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setSuccess('Task deleted!');
      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dashboard-shell page-shell min-h-screen overflow-hidden">
      <DecorBackground />

      <div className="dashboard-content relative z-10 mx-auto w-full max-w-6xl">
        <DashboardHeader taskCount={tasks.length} onLogout={onLogout} />
        <div className="dashboard-grid">
          <TaskFormCard
            title={title}
            description={description}
            onTitleChange={(e) => setTitle(e.target.value)}
            onDescriptionChange={(e) => setDescription(e.target.value)}
            onSubmit={handleCreate}
            error={error}
            success={success}
          />
          <TaskListCard tasks={tasks} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
