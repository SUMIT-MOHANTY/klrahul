if (!user || !user.isActive) {
    return null;
  }
  
  // Mock password validation - all mock users have password "password123"
  if (password === 'password123') {
    return user;
  }
  
  return null;
};

// Search functions
export const searchMockBooks = (query: string): Book[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockBooks.filter(book => 
    book.title.toLowerCase().includes(lowercaseQuery) ||
    book.author.toLowerCase().includes(lowercaseQuery) ||
    book.isbn.includes(lowercaseQuery) ||
    book.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchMockUsers = (query: string): User[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockUsers.filter(user => 
    user.username.toLowerCase().includes(lowercaseQuery) ||
    user.email.toLowerCase().includes(lowercaseQuery) ||
    user.firstName.toLowerCase().includes(lowercaseQuery) ||
    user.lastName.toLowerCase().includes(lowercaseQuery)
  );
};

// Statistics functions
export const getMockLibraryStats = () => {
  const totalBooks = mockBooks.reduce((sum, book) => sum + book.totalCopies, 0);
  const availableBooks = mockBooks.reduce((sum, book) => sum + book.availableCopies, 0);
  const activeLoans = mockLoans.filter(loan => loan.status === 'active').length;
  const overdueLoans = mockLoans.filter(loan => loan.status === 'overdue').length;
  const totalUsers = mockUsers.filter(user => user.isActive).length;
  
  return {
    totalBooks,
    availableBooks,
    borrowedBooks: totalBooks - availableBooks,
    activeLoans,
    overdueLoans,
    totalUsers,
    totalPatrons: mockUsers.filter(user => user.role === 'patron' && user.isActive).length
  };
};