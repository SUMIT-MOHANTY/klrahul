import React, { useState } from 'react';
import { AppLayout } from '../../components/layout/AppLayout';
import { mockUsers } from '../../mocks/mockData';

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock authentication
    const user = mockUsers.find(u => u.username === username);
    if (user) {
      // Store user in localStorage for demo
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <AppLayout>
      <div className="login-page">
        <h1>Library Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default LoginPage;
