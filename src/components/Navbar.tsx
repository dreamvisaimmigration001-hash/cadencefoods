import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { CadenceLogo } from './CadenceLogo';
import { CADENCE_ASSETS } from '../constants/companyAssets';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'purpose', label: 'Purpose' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'why-cadence', label: 'Why Cadence' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111215]/95 backdrop-blur-md border-b border-neutral-800 py-2.5 shadow-lg'
            : 'bg-[#111215]/85 backdrop-blur-sm border-b border-neutral-800/50 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Official Logo requested by user */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer text-left focus:outline-none group"
            aria-label="Cadence Foods Home"
          >
            <CadenceLogo className="h-9 sm:h-10 w-auto group-hover:opacity-90 transition-opacity" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C25737]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Ontario Made badge & Primary Action */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={CADENCE_ASSETS.ontarioMade}
              alt="Ontario Made"
              className="h-7 sm:h-8 w-auto hidden sm:block opacity-90 hover:opacity-100 transition-opacity"
              loading="eager"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer rounded-none border border-[#C25737] flex items-center gap-1.5"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white md:hidden cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111215]/98 pt-24 px-8 pb-10 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-5 text-xl font-display font-medium text-neutral-200">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left py-2 border-b border-neutral-800 transition-colors flex items-center justify-between ${
                  currentPage === item.id ? 'text-[#C25737] font-bold' : 'hover:text-[#C25737]'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <span className="text-xs font-mono px-2 py-0.5 bg-[#C25737] text-white">
                    CURRENT
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-neutral-800 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={CADENCE_ASSETS.ontarioMade}
                alt="Ontario Made"
                className="h-8 w-auto"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs text-neutral-400 font-mono">
                Certified Ontario Made · Toronto, ON M6N 2V7, Canada
              </span>
            </div>

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#C25737] hover:bg-[#AA4729] transition-all text-center"
            >
              START A CONVERSATION
            </button>
          </div>
        </div>
      )}
    </>
  );
};
