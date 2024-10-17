import React from 'react';

const AdminDashboard: React.FC = () => {
  // In a real application, you would fetch this data from an API
  const stats = {
    totalReservations: 150,
    activeReservations: 45,
    totalProducts: 75,
    revenue: 10000,
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Total Reservations</h2>
          <p className="text-3xl">{stats.totalReservations}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Active Reservations</h2>
          <p className="text-3xl">{stats.activeReservations}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-3xl">{stats.totalProducts}</p>
        </div>
        <div className="bg-purple-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-3xl">${stats.revenue}</p>
        </div>
      </div>
      {/* Add more admin features here */}
    </div>
  );
};

export default AdminDashboard;