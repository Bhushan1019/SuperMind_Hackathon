import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const isScroll = window.scrollY > 20;
      setScrolled(isScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold cursor-pointer flex gap-4 justify-center items-center"
          >
            <img
              src={isScrolled ? "/eye.png" : "/logo2.png"}
              alt="logo"
              className="w-10 transition-all duration-300"
            />
            {/* Text color changes based on scroll */}
            <p
              className={`transition-colors duration-100 ${
                isScrolled ? "text-purple-600" : "text-white"
              }`}
            >
              SocialSights
            </p>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className={`transition-colors duration-100 ${
                isScrolled ? "text-purple-600" : "text-white"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={`transition-colors duration-100 ${
                isScrolled ? "text-purple-600" : "text-white"
              }`}
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors duration-100 ${
                isScrolled ? "text-purple-600" : "text-white"
              }`}
            >
              Contact
            </button>
            <Link
              to="/dashboard"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-600 hover:text-purple-700 transition-all duration-300"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 w-full p-6 shadow-lg rounded-lg z-40">
            <div className="flex flex-col gap-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-purple-600 transition-all duration-300"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-600 hover:text-purple-600 transition-all duration-300"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-purple-600 transition-all duration-300"
              >
                Contact
              </button>
              <Link
                to="/dashboard"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
