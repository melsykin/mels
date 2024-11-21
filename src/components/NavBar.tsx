import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-magic-purple">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold">mels</span>
          </Link>
          
          <div className="flex space-x-8 text-slate-600">
            <Link 
              to="/about" 
              className={`hover:text-magic-pink transition-colors ${
                location.pathname === '/about' ? 'text-magic-pink' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`hover:text-magic-pink transition-colors ${
                location.pathname === '/projects' ? 'text-magic-pink' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`hover:text-magic-pink transition-colors ${
                location.pathname === '/blog' ? 'text-magic-pink' : ''
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-magic-pink transition-colors ${
                location.pathname === '/contact' ? 'text-magic-pink' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;