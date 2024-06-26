
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-full w-64 fixed left-0 top-0 overflow-y-auto">
      {/* Sidebar content */}
      <div className="p-4 text-white">
        <h2 className="text-lg font-semibold mb-4">Companies</h2>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">PRU</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">APPL</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">META</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">ETC</a></li>

          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
