import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full z-10 transition-all duration-300 ${
        isScrolled || window.innerWidth < 768
          ? 'bg-white text-black'
          : 'bg-transparent text-white top-8'
      }`}
      style={{ padding: '1rem' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            className="w-40 object-contain"
          />
        </div>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <ul
          className={`flex md:flex-row flex-col md:items-center absolute md:relative bg-white md:bg-transparent left-0 w-full md:w-auto transition-transform duration-300 ${
            isMobileMenuOpen ? 'top-16' : '-top-48'
          } md:top-0 md:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0`}
        >
          <li>
            <a href="#home" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-red-500">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
