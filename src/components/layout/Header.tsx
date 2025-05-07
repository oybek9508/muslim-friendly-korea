import React from "react";

const Header = () => {
  return (
    <header className="h-[72px] w-full bg-white shadow flex items-center px-6 justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-bold">MyLogo</div>

      {/* Right: Nav Links */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
