import React from 'react';
import AuthToggle from './AuthToggle.jsx';

export default function AuthPanel({ showRegister, onShowLogin, onShowRegister, children }) {
  return (
    <section className="panel-glass auth-panel animate-rise-delayed">
      <AuthToggle
        showRegister={showRegister}
        onShowLogin={onShowLogin}
        onShowRegister={onShowRegister}
      />
      <div className="auth-panel-body">{children}</div>
    </section>
  );
}
