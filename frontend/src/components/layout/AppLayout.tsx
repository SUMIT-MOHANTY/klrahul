import React from 'react';
import { getCurrentUser } from '../../mocks/mockData';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const currentUser = getCurrentUser();

  const handleProfileClick = () => {
    window.location.href = '/profile';
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Library System</h1>
            </div>
            {currentUser && (
              <nav className="flex items-center space-x-4">
                <button
                  onClick={handleProfileClick}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  id="profile-link"
                >
                  Profile
                </button>
                <span className="text-gray-500">|</span>
                <span className="text-sm text-gray-600">
                  Welcome, {currentUser.firstName}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </nav>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};
