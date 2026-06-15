import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-brand-void/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Links */}
        <div className="hidden md:flex space-x-12 w-1/3">
          <a href="#philosophy" className="text-[10px] uppercase tracking-[0.25em] text-brand-platinum/70 hover:text-brand-gold transition-colors duration-300">The Philosophy</a>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center w-full md:w-1/3">
          <a href="#" className="flex flex-col items-center group cursor-pointer">
            <div className="w-4 h-4 rounded-full border border-brand-gold group-hover:bg-brand-gold/20 transition-all duration-500 mb-2"></div>
            <span className="font-serif text-xl tracking-[0.3em] text-brand-platinum uppercase">L'Absence</span>
          </a>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex justify-end space-x-12 w-1/3">
          <a href="#customizer" className="text-[10px] uppercase tracking-[0.25em] text-brand-platinum/70 hover:text-brand-gold transition-colors duration-300">The Commission</a>
          <a href="#inquest" className="text-[10px] uppercase tracking-[0.25em] text-brand-platinum/70 hover:text-brand-gold transition-colors duration-300">The Inquest</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex w-1/3 justify-end">
          <button className="text-brand-platinum hover:text-brand-gold transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
