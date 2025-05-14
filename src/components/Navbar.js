import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-4 p-4 flex justify-between">
      <div className="text-xl font-semibold">My Portfolio</div>
      <div>
        <a href="#" className="mr-4">Home</a>
        <a href="#">Projects</a>
      </div>
    </nav>
  );
}
