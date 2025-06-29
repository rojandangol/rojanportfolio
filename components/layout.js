import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white px-6 md:px-16 py-10 font-sans">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;