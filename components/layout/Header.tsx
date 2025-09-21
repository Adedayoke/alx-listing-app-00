import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">PropertyList</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Rooms</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Mansions</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Countryside</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Beachfront</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">City Center</a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <button className="text-gray-700 hover:text-gray-900">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;