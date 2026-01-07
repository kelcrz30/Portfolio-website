import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking a nav item
  const handleNavClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <header className="text-black py-10 px-4 z-50 relative">
        <div className="flex items-center justify-between">
          {/* Logo scrolls to hero */}
          <Link
            to="hero"
            smooth={true}
            duration={600}
            className="font-Moderniz text-orange-400 bg-transparent border-none cursor-pointer text-xl"
            onClick={handleNavClick}
          >
            Kel Dev.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-80} // adjust if header overlaps
              className="font-Moderniz hover:text-orange-400 transition-colors cursor-pointer text-black"
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={600}
              offset={-80}
              className="font-Moderniz hover:text-orange-400 transition-colors cursor-pointer text-black"
              onClick={handleNavClick}
            >
              Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="font-Moderniz hover:text-orange-400 transition-colors cursor-pointer text-black"
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center z-50 relative cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex flex-col space-y-2">
              <span
                className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-14 text-white text-3xl z-50 hover:text-orange-400 transition-colors cursor-pointer"
          aria-label="Close menu"
          type="button"
          style={{ pointerEvents: "auto" }}
        >
          ×
        </button>


        {/* Mobile Navigation */}
        <nav className="flex flex-col justify-center h-full px-14">
          {[
            { name: "About", sectionId: "about" },
            { name: "Work", sectionId: "work" },
            { name: "Contact", sectionId: "contact" },
          ].map((item, index) => (
            <Link
              key={item.name}
              to={item.sectionId}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={handleNavClick}
              className={`text-white text-3xl font-Moderniz py-6 border-b border-white/10 hover:text-orange-400 transition-all duration-300 transform cursor-pointer ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                pointerEvents: "auto",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
