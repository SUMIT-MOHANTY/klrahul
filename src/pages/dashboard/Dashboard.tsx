if (book.status === 'Checked Out' && book.dueDate) {
        const dueDate = new Date(book.dueDate);
        return dueDate < today;
      }
      return false;
    }).length;

    return {
      totalBooks,
      availableBooks,
      checkedOutBooks,
      overdueBooks
    };
  };

  const stats = calculateStats();

  const handleViewCatalog = () => {
    navigate('/catalog');
  };

  const handleBookClick = (bookId: string) => {
    navigate(`/books/${bookId}`);
  };

  const getRecentActivity = () => {
    // Return recently checked out books for activity feed
    return mockBooks
      .filter(book => book.status === 'Checked Out')
      .slice(0, 5);
  };

  const recentActivity = getRecentActivity();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Library Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's your library overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon total">📚</div>
          <div className="stat-content">
            <h3>{stats.totalBooks}</h3>
            <p>Total Books</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon available">✅</div>
          <div className="stat-content">
            <h3>{stats.availableBooks}</h3>
            <p>Available</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon checked-out">📖</div>
          <div className="stat-content">
            <h3>{stats.checkedOutBooks}</h3>
            <p>Checked Out</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon overdue">⚠️</div>
          <div className="stat-content">
            <h3>{stats.overdueBooks}</h3>
            <p>Overdue</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Quick Actions */}
        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <button 
              className="action-button primary"
              onClick={handleViewCatalog}
            >
              View Full Catalog
            </button>
            <button 
              className="action-button secondary"
              onClick={() => navigate('/loans/new')}
            >
              Check Out Book
            </button>
            <button 
              className="action-button secondary"
              onClick={() => navigate('/loans/return')}
            >
              Return Book
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.length > 0 ? (
              recentActivity.map(book => (
                <div 
                  key={book.id} 
                  className="activity-item"
                  onClick={() => handleBookClick(book.id)}
                >
                  <div className="activity-info">
                    <h4>{book.title}</h4>
                    <p>by {book.author}</p>
                    <small>
                      Borrowed by {book.borrower} • Due: {book.dueDate ? new Date(book.dueDate).toLocaleDateString() : 'N/A'}
                    </small>
                  </div>
                  <div className={`status-badge ${book.status === 'Available' ? 'available' : 'checked-out'}`}>
                    {book.status}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-activity">No recent activity</p>
            )}
          </div>
        </div>

        {/* Popular Books Preview */}
        <div className="dashboard-section">
          <h2>Available Books Preview</h2>
          <div className="books-preview">
            {mockBooks
              .filter(book => book.status === 'Available')
              .slice(0, 6)
              .map(book => (
                <div 
                  key={book.id} 
                  className="book-card"
                  onClick={() => handleBookClick(book.id)}
                >
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                  </div>
                  <div className="status-badge available">
                    Available
                  </div>
                </div>
              ))
            }
          </div>
          <button 
            className="view-more-button"
            onClick={handleViewCatalog}
          >
            View All Books ->
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;