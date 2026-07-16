export interface User {
  id: number;
  username: string;
  email: string;
  role: 'Admin' | 'Librarian' | 'Patron';
  firstName: string;
  lastName: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@library.com',
    role: 'Admin',
    firstName: 'System',
    lastName: 'Administrator'
  },
  {
    id: 2,
    username: 'librarian',
    email: 'librarian@library.com',
    role: 'Librarian',
    firstName: 'Jane',
    lastName: 'Smith'
  },
  {
    id: 3,
    username: 'patron',
    email: 'patron@library.com',
    role: 'Patron',
    firstName: 'John',
    lastName: 'Doe'
  }
];

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem('currentUser');
  return stored ? JSON.parse(stored) : null;
};

export const authenticateUser = (username: string, password: string): User | null => {
  const user = mockUsers.find(u => u.username === username);
  // Simple mock authentication - in real app would verify password
  return user || null;
};
