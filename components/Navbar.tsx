
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
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background-light/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="px-4 lg:px-40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">mosque</span>
          </div>
          <h2 className={`text-xl font-display font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
            Umrah & Hajj Plus
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Packages', 'Services', 'About Us'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium text-sm transition-colors hover:text-accent ${scrolled ? 'text-[#2C3E50]' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="bg-primary hover:bg-[#083d3b] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2">
            <span>Book Consultation</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <button className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
