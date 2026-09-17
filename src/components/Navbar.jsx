import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
];

function Navbar({ darkMode, setDarkMode, handleDownloadCV }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#050f1c]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center py-4 md:py-6 px-4 sm:px-6 md:px-16 lg:px-28">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white tracking-wide">
          Antima<span className="text-[#00d2ff]"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group text-sm font-medium"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00d2ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <button
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-cyan-500 to-blue-600
            hover:from-cyan-400 hover:to-blue-500
            text-white px-5 py-2 rounded-lg font-semibold text-sm
            transition duration-300 transform hover:scale-105"
          >
            Download CV
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-cyan-400 text-cyan-400
            px-4 py-1 rounded-lg text-sm
            hover:bg-cyan-400 hover:text-black
            transition duration-300"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden text-2xl text-[#00d2ff]"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 sm:px-6 pb-6 pt-2 bg-[#050f1c]/95">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-base font-medium hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              handleDownloadCV();
              closeMenu();
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600
            text-white px-5 py-2.5 rounded-lg font-semibold text-sm w-full"
          >
            Download CV
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-cyan-400 text-cyan-400
            px-4 py-2 rounded-lg text-sm w-full"
          >
            {darkMode ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
