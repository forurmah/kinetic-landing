import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D8D4CD] bg-[#E7E4DE] text-[#68645F] text-xs py-14 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top zone */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#D8D4CD]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-normal tracking-tight text-[#1C1C1C]">
                Kinetic
              </span>
            </div>
            <p className="text-[#5C5854] text-xs max-w-md">
              Simple landing pages and practical marketing improvements for small businesses and online stores in Iran.
            </p>
          </div>

          {/* Clean nav links: Services, Examples, Contact, Request a call */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#5C5854]">
            <a href="#services" className="hover:text-[#1C1C1C] transition-colors">
              Services
            </a>
            <a href="#examples" className="hover:text-[#1C1C1C] transition-colors">
              Examples
            </a>
            <a href="#contact" className="hover:text-[#1C1C1C] transition-colors">
              Contact
            </a>
            <a
              href="#contact"
              className="text-[#23374D] hover:text-[#182736] font-medium cursor-pointer"
            >
              Request a call
            </a>
          </div>
        </div>

        {/* Bottom row: quiet legal & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#68645F]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Kinetic. All rights reserved.</span>
            <span>·</span>
            <span>Calls scheduled in Tehran time (Asia/Tehran)</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#5C5854] hover:text-[#1C1C1C] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
