import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar: React.FC = () => {
  return (
    <nav className=" bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Movie App
        </Link>
        <Search />
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mr-4">
            Home
          </Link>
          <Link to="/favorites" className="text-gray-300 hover:text-white">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
