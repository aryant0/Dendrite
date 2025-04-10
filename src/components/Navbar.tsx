import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Solutions' },
    { path: '/portfolio', label: 'Case Studies' },
    { path: '/contact', label: 'Contact', isButton: true }
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Dendrite.ai Logo" 
                className="h-14 w-auto transition-transform duration-200 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/200x50?text=Dendrite.ai';
                }}
              />
              <span className="ml-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 hidden sm:block">
                Dendrite.ai
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium ${
                  link.isButton
                    ? 'bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors'
                    : `text-gray-300 hover:text-purple-400 transition-colors ${
                        isActive(link.path) ? 'text-purple-400 font-semibold border-b-2 border-purple-400' : ''
                      }`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-8 w-8" /> 
              ) : (
                <Menu className="h-8 w-8" /> 
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    link.isButton
                      ? 'bg-purple-600 text-white text-center hover:bg-purple-700'
                      : `text-gray-300 hover:bg-gray-800 ${
                          isActive(link.path) ? 'bg-gray-800 text-purple-400' : ''
                        }`
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;