import React, { useState } from 'react';

// Set your backend API base URL here
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api/v1';

export default function AuthForm({ onAuth, type = 'login' }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/auth/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      onAuth(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md space-y-4">
      <div className="space-y-1 text-left">
        <h2 className="section-title">{type === 'login' ? 'Welcome back' : 'Create your account'}</h2>
        <p className="text-sm text-slate-600">
          {type === 'login'
            ? 'Log in to continue managing your task pipeline.'
            : 'Sign up to start organizing your daily trading tasks.'}
        </p>
      </div>
      <label className="field-wrap">
        <span className="field-label">Username</span>
        <input
          className="input-field"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </label>
      <label className="field-wrap">
        <span className="field-label">Password</span>
        <input
          className="input-field"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      {error && <div className="alert alert-error text-sm">{error}</div>}
      <button
        className="primary-action w-full"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Please wait...' : (type === 'login' ? 'Login' : 'Register')}
      </button>
    </form>
  );
}
