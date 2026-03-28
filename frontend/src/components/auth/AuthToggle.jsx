import React from 'react';

export default function AuthToggle({ showRegister, onShowLogin, onShowRegister }) {
  return (
    <div className="segmented-toggle">
      <button
        className={`segment-button ${!showRegister ? 'is-active' : ''}`}
        onClick={onShowLogin}
        type="button"
      >
        Login
      </button>
      <button
        className={`segment-button ${showRegister ? 'is-active' : ''}`}
        onClick={onShowRegister}
        type="button"
      >
        Register
      </button>
    </div>
  );
}
