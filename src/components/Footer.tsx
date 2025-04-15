
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-workants-black border-t border-workants-gray pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/551b1535-7e2d-46c2-90e6-ea22467d3e9e.png"
                alt="WorkAnts Consulting"
                className="h-10"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Providing exceptional architecture and construction services with quality, integrity, and innovation.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-blue-400 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/architecture" className="text-gray-300 hover:text-blue-400 text-sm">
                  Architecture
                </Link>
              </li>
              <li>
                <Link to="/construction" className="text-gray-300 hover:text-blue-400 text-sm">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-blue-400 text-sm">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Info@workants.co.za</p>
                  <p className="text-gray-300 text-sm">Daniel@workants.co.za</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-gray-300 text-sm">+27 73 246 1964</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-workants-gray pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} WorkAnts Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
