import React, { useState } from 'react';
import AuthForm from './AuthForm.jsx';
import Dashboard from './Dashboard.jsx';
import DecorBackground from './components/layout/DecorBackground.jsx';
import AuthHero from './components/auth/AuthHero.jsx';
import AuthPanel from './components/auth/AuthPanel.jsx';

function App() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    return token ? { token, username, role } : null;
  });
  const [showRegister, setShowRegister] = useState(false);

  const handleAuth = (data) => {
    if (data.token) {
      setUser({ token: data.token, username: data.user.username, role: data.user.role });
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.user.username);
      localStorage.setItem('role', data.user.role);
    } else {
      // Registration success
      setShowRegister(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  if (!user) {
    return (
      <div className="auth-shell page-shell min-h-screen overflow-hidden">
        <DecorBackground />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col justify-center">
          <div className="auth-layout">
            <AuthHero />
            <AuthPanel
              showRegister={showRegister}
              onShowLogin={() => setShowRegister(false)}
              onShowRegister={() => setShowRegister(true)}
            >
              {showRegister ? (
                <AuthForm type="register" onAuth={handleAuth} />
              ) : (
                <AuthForm type="login" onAuth={handleAuth} />
              )}
            </AuthPanel>
          </div>
        </div>
      </div>
    );
  }


  return <Dashboard token={user.token} onLogout={handleLogout} />;
}

export default App
