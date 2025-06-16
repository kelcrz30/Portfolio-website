import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <>
      <header className=" text-white py-10 px-4  z-50">
        <div className="flex items-center justify-between">
          <h2 className="font-Moderniz text-orange-400">Kel Dev.</h2>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-Moderniz hover:text-gray-300 transition-colors">About</a>
            <a href="#" className="font-Moderniz hover:text-gray-300 transition-colors">Work</a>
            <a href="#" className="font-Moderniz hover:text-gray-300 transition-colors">Contact</a>
          </nav>
          
          <button
            className="md:hidden flex items-center z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-2">
              <span
                className={`w-8 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? `rotate-45 translate-y-2.5` : ''
                }`}
              />
              <span
                className={`w-8 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-8 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 md:hidden bg-black transition-all duration-500 ease-in-out ${
        isOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
      }`}>
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-14 text-white text-3xl z-50 hover:text-gray-300 transition-colors"
          aria-label="Close menu"
        >
          x
        </button>

        <div className="absolute top-6 left-14 text-white text-xl font-medium">
          Portfolio
        </div>

        <nav className="flex flex-col justify-center h-full px-14">
          {[
            'About',
            'Work',
            'Contact'
          ].map((item, index) => (
            <a key={item} href="#"
              className={`text-white text-3xl font-Moderniz py-6 border-b border-white/10 hover:text-gray-300 transition-all duration-300 transform ${
                isOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-8 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
              }}
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;