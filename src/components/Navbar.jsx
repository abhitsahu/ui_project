import React from "react";
function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold text-white">STUDY<span className="text-blue-400">table</span></h1>
        <div>
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">Log in</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;