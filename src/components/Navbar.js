import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 py-2 shadow-md backdrop-blur-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Branding */}
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide">
          Elshebba<span className="text-white">.dev</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="text-cyan-400 border-b-2 border-cyan-400"
                onClick={closeMenu}
                className="cursor-pointer text-gray-300 hover:text-cyan-400 transition pb-1"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="md:hidden text-xl text-cyan-400 focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-center text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="text-cyan-400"
                onClick={closeMenu}
                className="block text-gray-300 hover:text-cyan-400 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
