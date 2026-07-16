to={item.path}
                    className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                  >
                    <span className="nav-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="nav-label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <span className="user-greeting">
              Hello, {userName}
            </span>
            <button
              onClick={handleLogout}
              className="logout-button"
              type="button"
              aria-label="Logout"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="main-content">
          {children || <Outlet />}
        </div>
      </main>

      <style jsx>{`
        .app-layout {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .app-header {
          background-color: #ffffff;
          border-bottom: 1px solid #e9ecef;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .brand-title {
          margin: 0;
          font-size: 1.5rem;
          color: #343a40;
          font-weight: 600;
        }

        .main-navigation {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.5rem;
        }

        .nav-item {
          margin: 0;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: #6c757d;
          border-radius: 0.375rem;
          transition: all 0.2s ease-in-out;
          font-weight: 500;
        }

        .nav-link:hover {
          background-color: #f8f9fa;
          color: #495057;
        }

        .nav-link.active {
          background-color: #007bff;
          color: #ffffff;
        }

        .nav-icon {
          font-size: 1.125rem;
        }

        .nav-label {
          font-size: 0.875rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-greeting {
          font-size: 0.875rem;
          color: #6c757d;
          font-weight: 500;
        }

        .logout-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #dc3545;
          color: #ffffff;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .logout-button:hover {
          background-color: #c82333;
        }

        .logout-button:focus {
          outline: 2px solid #dc3545;
          outline-offset: 2px;
        }

        .app-main {
          flex: 1;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            height: auto;
            padding: 1rem;
            gap: 1rem;
          }

          .main-navigation {
            order: 2;
            width: 100%;
          }

          .nav-list {
            justify-content: center;
            flex-wrap: wrap;
          }

          .header-actions {
            order: 1;
            width: 100%;
            justify-content: space-between;
          }

          .brand-title {
            font-size: 1.25rem;
          }

          .nav-link {
            padding: 0.375rem 0.75rem;
            font-size: 0.8125rem;
          }

          .main-content {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AppLayout;