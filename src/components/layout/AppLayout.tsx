import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
