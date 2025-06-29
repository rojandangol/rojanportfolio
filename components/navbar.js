import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-16">
      <h1 className="text-xl font-bold">
        ROJAN <span className="text-green-500">DANGOL</span>
      </h1>
      <ul className="flex gap-6 text-sm md:text-base">
        <li className="text-green-500 cursor-pointer">Home</li>
        <li className="cursor-pointer">About Me</li>
        <li className="cursor-pointer">Resume</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
