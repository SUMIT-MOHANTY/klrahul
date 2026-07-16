if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-message">
          <h3>Error</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="retry-button"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Library Dashboard</h1>
        <p>Welcome to your library management system</p>
      </header>

      {/* KPI Stats Section */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>{stats.totalBooks}</h3>
            <p>Total Books</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ color: '#10b981' }}>✅</div>
          <div className="stat-content">
            <h3>{stats.availableBooks}</h3>
            <p>Available Books</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ color: '#f59e0b' }}>📖</div>
          <div className="stat-content">
            <h3>{stats.checkedOutBooks}</h3>
            <p>Checked Out</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.totalUsers}</h3>
            <p>Total Users</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔄</div>
          <div className="stat-content">
            <h3>{stats.activeLoans}</h3>
            <p>Active Loans</p>
          </div>
        </div>
      </section>

      {/* Recent Books Section */}
      <section className="recent-books-section">
        <div className="section-header">
          <h2>Recent Books</h2>
          <button 
            onClick={handleViewAllBooks}
            className="view-all-button"
          >
            View All Books
          </button>
        </div>

        <div className="books-table-container">
          <table className="books-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {recentBooks.map((book) => (
                <tr 
                  key={book.id}
                  onClick={() => handleBookClick(book.id)}
                  className="book-row clickable"
                >
                  <td className="book-title">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ 
                        backgroundColor: getStatusColor(book.status) + '20',
                        color: getStatusColor(book.status),
                        border: `1px solid ${getStatusColor(book.status)}`
                      }}
                    >
                      {book.status}
                    </span>
                  </td>
                  <td>{book.publishedYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions-section">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button 
            className="action-button"
            onClick={() => navigate('/catalog')}
          >
            <span className="action-icon">🔍</span>
            Browse Catalog
          </button>
          <button 
            className="action-button"
            onClick={() => navigate('/loans')}
          >
            <span className="action-icon">📋</span>
            Manage Loans
          </button>
          <button 
            className="action-button"
            onClick={() => navigate('/users')}
          >
            <span className="action-icon">👤</span>
            User Management
          </button>
          <button 
            className="action-button"
            onClick={() => navigate('/reports')}
          >
            <span className="action-icon">📊</span>
            Reports
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;