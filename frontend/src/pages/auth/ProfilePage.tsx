import React, { useState, useEffect } from 'react';
import { AppLayout } from '../../components/layout/AppLayout';
import { Button, Input } from '../../components/ui';
import { getCurrentUser, type User } from '../../mocks/mockData';

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setFormData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
      });
    } else {
      // Redirect to login if no user
      window.location.href = '/login';
    }
  }, []);

  const handleSave = () => {
    if (user) {
      const updatedUser = {
        ...user,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setEditing(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
    }
    setEditing(false);
  };

  if (!user) {
    return (
      <AppLayout>
        <div className="text-center">Loading...</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">User Profile</h1>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-2 rounded">
                {user.username}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-2 rounded">
                {user.role}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              {editing ? (
                <Input
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              ) : (
                <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {user.firstName}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              {editing ? (
                <Input
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              ) : (
                <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {user.lastName}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              {editing ? (
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              ) : (
                <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {user.email}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            {editing ? (
              <>
                <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                  Save Changes
                </Button>
                <Button onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600">
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
