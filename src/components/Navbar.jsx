import React from "react";

function Navbar({ darkMode, setDarkMode, handleDownloadCV }) {
  return (
    <nav className="sticky top-0 z-50 
    bg-[#050f1c]/80 backdrop-blur-md
    flex justify-between items-center py-6 px-6 md:px-16 lg:px-28">

      {/* Logo */}
      <h1 className="text-xl font-bold text-white">
        Antima
      </h1>

      {/* Links */}
      <div className="flex items-center space-x-6">

        <a href="#home" className="hover:text-cyan-400 transition duration-300">
          Home
        </a>

        <a href="#skills" className="hover:text-cyan-400 transition duration-300">
          Skills
        </a>

        <a href="#services" className="hover:text-cyan-400 transition duration-300">
          Services
        </a>

        <a href="#projects" className="hover:text-cyan-400 transition duration-300">
          Projects
        </a>

        <button
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 
          hover:from-cyan-400 hover:to-blue-500
          text-white px-5 py-2 rounded-lg font-semibold 
          transition duration-300 transform hover:scale-105"
        >
          Download CV
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border border-cyan-400 text-cyan-400 
          px-4 py-1 rounded-lg 
          hover:bg-cyan-400 hover:text-black 
          transition duration-300"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;