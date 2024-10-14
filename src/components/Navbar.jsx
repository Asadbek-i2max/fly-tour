import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { useTranslation } from 'react-i18next';
import i18n from "../i18n";


const Navbar = () => {
  // const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsDropdownOpen(false);
    }
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleLanguageDropdown = () => {
    if (!isDropdownOpen) {
      setIsMobileMenuOpen(false);
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    i18n.changeLanguage(language);
    console.log(selectedLanguage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full z-10 transition-all duration-300 ${
        isScrolled || window.innerWidth < 768
          ? "bg-white text-black"
          : "bg-transparent text-white top-[1.6rem]" 
      }`}
      style={{ padding: "1rem" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            className="w-40 object-contain"
          />
        </div>
        <div className="flex items-center flex-start md:justify-start flex-wrap">
          <ul
            className={`flex flex-col md:flex-row md:items-center absolute md:relative bg-white md:bg-transparent left-0 w-full md:w-auto ${
              isMobileMenuOpen ? "top-16" : "-translate-y-full"
            } md:transform-none md:top-0 md:space-x-8 font-medium text-lg space-y-2 md:space-y-0 p-4 md:p-0`}
          >
            <li>
              <Link
                to="/"
                className="hover:text-orange-500"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                className="hover:text-orange-500"
                onClick={handleLinkClick}
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-orange-500"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-orange-500"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center md:ml-6 mt-2 md:mt-0">
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
            <div className="relative md:ml-2">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleLanguageDropdown}
              >
                <i className="fa-solid fa-globe"></i>
              </div>
              {isDropdownOpen && (
                <ul className="absolute md:left-1 right-1 bg-white text-black shadow-md rounded-md mt-2 w-24 z-10">
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleLanguageChange("Uz")}
                  >
                    Uz
                  </li>
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleLanguageChange("Ru")}
                  >
                    Ru
                  </li>
                  <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleLanguageChange("Eng")}
                  >
                    Eng
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
