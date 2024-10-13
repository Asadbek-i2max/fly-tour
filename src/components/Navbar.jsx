// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  //   const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full z-10 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-slate-900">
          <Link to="/">
            <img
              src="/src/assets/images/logo.png"
              className="w-40 object-contain"
              alt="logo"
            ></img>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-slate-900 hover:text-blue-500">
            Main
          </Link>
          <Link to="/" className="text-slate-900 hover:text-blue-500">
            Tours
          </Link>
          <Link to="/" className="text-slate-900 hover:text-blue-500">
            About us
          </Link>
          <Link to="/" className="text-slate-900 hover:text-blue-500">
            Blogs
          </Link>
          <Link to="/" className="text-slate-900 hover:text-blue-500">
            Contact us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden ${
            isOpen ? 'flex' : 'hidden'
          } flex-col items-center absolute left-0 w-full bg-white border-t`}
          style={{
            top: '150px'
          }}
        >
          <Link to="/" className="text-xl text-slate-900 hover:text-blue-500">
            Main
          </Link>
          <Link to="/" className="text-xl text-slate-900 hover:text-blue-500">
            Tours
          </Link>
          <Link to="/" className="text-xl text-slate-900 hover:text-blue-500">
            About us
          </Link>
          <Link to="/" className="text-xl text-slate-900 hover:text-blue-500">
            Blogs
          </Link>
          <Link to="/" className="text-xl text-slate-900 hover:text-blue-500">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
