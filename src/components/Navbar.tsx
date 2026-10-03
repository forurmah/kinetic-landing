import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#D8D4CD] bg-[#E7E4DE]/90 backdrop-blur-sm transition-colors">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-normal tracking-tight text-[#1C1C1C] group-hover:text-[#23374D] transition-colors">
            Kinetic
          </span>
        </a>

        {/* Navigation links: Services, Examples, Contact */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-[#5C5854]">
          <a href="#services" className="hover:text-[#1C1C1C] transition-colors">
            Services
          </a>
          <a href="#examples" className="hover:text-[#1C1C1C] transition-colors">
            Examples
          </a>
          <a href="#contact" className="hover:text-[#1C1C1C] transition-colors">
            Contact
          </a>
        </nav>

        {/* Primary CTA: Request a call */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="px-6 py-2.5 text-xs font-medium text-white bg-[#23374D] hover:bg-[#182736] rounded-full transition-all whitespace-nowrap flex items-center gap-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23374D]/20 cursor-pointer"
          >
            <span>Request a call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium text-white bg-[#23374D] hover:bg-[#182736] rounded-full cursor-pointer"
          >
            Request a call
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5C5854] hover:text-[#1C1C1C] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#D8D4CD] bg-[#E7E4DE] px-4 pt-2 pb-6 space-y-3 text-left">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#5C5854] hover:text-[#1C1C1C]"
          >
            Services
          </a>
          <a
            href="#examples"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#5C5854] hover:text-[#1C1C1C]"
          >
            Examples
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#5C5854] hover:text-[#1C1C1C]"
          >
            Contact
          </a>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center text-xs font-medium text-white bg-[#23374D] hover:bg-[#182736] rounded-full"
            >
              Request a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
