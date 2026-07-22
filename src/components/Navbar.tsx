import React, { useState } from 'react';
import { SCHOOL_DETAILS } from '../data/schoolData';
import { Phone, MapPin, Menu, X, GraduationCap, ChevronRight, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Campus Facilities', href: '#facilities' },
    { name: 'Curriculum & Medium', href: '#curriculum' },
    { name: 'Reviews & Ratings', href: '#reviews' },
    { name: 'Campus Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Murali Nagar, Visakhapatnam
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {SCHOOL_DETAILS.email}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a href={`tel:${SCHOOL_DETAILS.phone}`} className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold">{SCHOOL_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white py-3.5 border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-amber-400 flex items-center justify-center shadow-xs border border-amber-500/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                  St Anny High School
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold tracking-wider uppercase">
                  Est. 1996
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Murali Nagar, Visakhapatnam • English Medium</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 pt-2 border-t border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

