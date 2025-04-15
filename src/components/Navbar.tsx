
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-workants-black border-b border-workants-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/lovable-uploads/551b1535-7e2d-46c2-90e6-ea22467d3e9e.png"
                alt="WorkAnts Consulting"
                className="h-12"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/architecture" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Architecture
              </Link>
              <Link to="/construction" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Construction
              </Link>
              <Link to="/projects" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link to="/book" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Book Consultation
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline" className="text-white border-white hover:bg-primary hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary text-white hover:bg-blue-700">
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-workants-darkgray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/architecture" 
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Architecture
            </Link>
            <Link 
              to="/construction" 
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Construction
            </Link>
            <Link 
              to="/projects" 
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/book" 
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Book Consultation
            </Link>
            <div className="flex space-x-2 mt-4 px-3">
              <Link to="/login" className="w-1/2" onClick={toggleMenu}>
                <Button variant="outline" className="w-full text-white border-white hover:bg-primary hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="w-1/2" onClick={toggleMenu}>
                <Button className="w-full bg-primary text-white hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
