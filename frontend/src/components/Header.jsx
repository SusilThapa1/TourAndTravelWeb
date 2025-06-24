import { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tours", href: "#tours" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // const handleActiveLink = (link) => {
  //   setActiveLink(link);
  // };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-md scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="h-4 w-4" />
              <span>info@tourwebsite.com</span>
            </div>
          </div>
          <span className="italic">Follow your dreams</span>
        </div>

        {/* Main nav */}
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent font-playfair">
            TourWebsite
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`text-gray-800   hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-pink-500 transition-colors font-medium ${
                  activeLink === item.name
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/signin"
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              Sign In
            </Link>
            <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded hover:opacity-90 transition cursor-pointer">
              <a href="/">Book Now</a>
            </button>
          </div>

          {/* Mobile menu icon */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-gray-800" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
                  <a href="/signin"></a>
                  Sign In
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-white rounded hover:opacity-90 transition">
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
