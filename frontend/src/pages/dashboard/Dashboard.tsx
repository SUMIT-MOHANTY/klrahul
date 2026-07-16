import React from 'react';

// Mock data for KPI calculations
const mockBooks = [
  { id: 1, title: "The Great Gatsby", status: "Available" },
  { id: 2, title: "To Kill a Mockingbird", status: "Checked Out" },
  { id: 3, title: "1984", status: "Available" },
  { id: 4, title: "Pride and Prejudice", status: "Available" },
  { id: 5, title: "The Catcher in the Rye", status: "Checked Out" },
  { id: 6, title: "Lord of the Flies", status: "Available" },
  { id: 7, title: "Animal Farm", status: "Checked Out" },
  { id: 8, title: "Brave New World", status: "Available" },
  { id: 9, title: "The Hobbit", status: "Available" },
  { id: 10, title: "Fahrenheit 451", status: "Checked Out" }
];

interface KPIData {
  totalBooks: number;
  availableBooks: number;
  checkedOutBooks: number;
  totalUsers: number;
}

const Dashboard: React.FC = () => {
  // Mock KPI data
  const kpiData: KPIData = {
    totalBooks: 10,
    availableBooks: 6,
    checkedOutBooks: 4,
    totalUsers: 25
  };

  return (
    <div className="dashboard">
      <h1>Library Dashboard</h1>

      <div className="kpi-summary">
        <div className="kpi-card">
          <h3>Total Books</h3>
          <span className="kpi-value">{kpiData.totalBooks}</span>
        </div>

        <div className="kpi-card">
          <h3>Available Books</h3>
          <span className="kpi-value">{kpiData.availableBooks}</span>
        </div>

        <div className="kpi-card">
          <h3>Checked Out</h3>
          <span className="kpi-value">{kpiData.checkedOutBooks}</span>
        </div>

        <div className="kpi-card">
          <h3>Total Users</h3>
          <span className="kpi-value">{kpiData.totalUsers}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
