import React, { useState, useEffect } from 'react';
import { AppLayout } from '../../components/layout/AppLayout';
import { User } from '../../mocks/mockData';

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Get current user from localStorage
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      setUser(JSON.parse(currentUserData));
    }
  }, []);

  if (!user) {
    return (
      <AppLayout>
        <div className="profile-page">
          <h1>User Profile</h1>
          <p>Please log in to view your profile.</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="profile-page">
        <h1>User Profile</h1>
        <div className="profile-details">
          <div className="profile-field">
            <label>Name:</label>
            <span>{user.firstName} {user.lastName}</span>
          </div>
          <div className="profile-field">
            <label>Username:</label>
            <span>{user.username}</span>
          </div>
          <div className="profile-field">
            <label>Email:</label>
            <span>{user.email}</span>
          </div>
          <div className="profile-field">
            <label>Role:</label>
            <span>{user.role}</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
