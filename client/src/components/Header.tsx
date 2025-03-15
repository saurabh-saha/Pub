import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-primary bg-opacity-95 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#" className="text-2xl md:text-3xl font-bold font-heading">
          <span className="text-secondary">Craft</span> & <span className="text-white">Cork</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link text-white hover:text-secondary transition duration-300">Home</a>
          <a href="#about" className="nav-link text-white hover:text-secondary transition duration-300">About</a>
          <a href="#menu" className="nav-link text-white hover:text-secondary transition duration-300">Menu</a>
          <a href="#events" className="nav-link text-white hover:text-secondary transition duration-300">Events</a>
          <a href="#gallery" className="nav-link text-white hover:text-secondary transition duration-300">Gallery</a>
          <a href="#contact" className="nav-link text-white hover:text-secondary transition duration-300">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-primary w-full ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-white hover:text-secondary py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-secondary py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#menu" 
            className="text-white hover:text-secondary py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            Menu
          </a>
          <a 
            href="#events" 
            className="text-white hover:text-secondary py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            Events
          </a>
          <a 
            href="#gallery" 
            className="text-white hover:text-secondary py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            Gallery
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-secondary py-2"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
