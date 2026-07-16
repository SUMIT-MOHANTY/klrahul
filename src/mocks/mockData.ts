export interface User {
  id: string;
  username: string;
  email: string;
  role: 'Admin' | 'Librarian' | 'Patron';
  firstName: string;
  lastName: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@library.com',
    role: 'Admin',
    firstName: 'System',
    lastName: 'Administrator'
  },
  {
    id: '2',
    username: 'librarian',
    email: 'librarian@library.com',
    role: 'Librarian',
    firstName: 'Jane',
    lastName: 'Smith'
  },
  {
    id: '3',
    username: 'patron',
    email: 'patron@library.com',
    role: 'Patron',
    firstName: 'John',
    lastName: 'Doe'
  }
];
