import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Rental System</h1>
      <p className="mb-4">Find and reserve the perfect items for your needs.</p>
      <Link to="/catalog" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Browse Catalog
      </Link>
    </div>
  );
};

export default Home;