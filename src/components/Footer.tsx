import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-void pt-24 pb-12 border-t border-brand-obsidian">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">

          <div className="mb-12 md:mb-0">
            <a href="#" className="flex flex-col items-start group">
              <div className="w-3 h-3 rounded-full border border-brand-gold group-hover:bg-brand-gold/20 transition-all duration-500 mb-2"></div>
              <span className="font-serif text-lg tracking-[0.3em] text-brand-platinum uppercase">L'Absence</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.25em] text-brand-steel mb-4">Salons</h4>
              <ul className="space-y-2 font-serif text-brand-platinum/80 text-sm">
                <li className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Geneva</li>
                <li className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">London</li>
                <li className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Tokyo</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] uppercase tracking-[0.25em] text-brand-steel mb-4">Legal</h4>
              <ul className="space-y-2 font-serif text-brand-platinum/80 text-sm">
                <li className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Terms of Commission</li>
                <li className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-obsidian pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-brand-steel/50 font-sans tracking-wide">
            &copy; {new Date().getFullYear()} L'Absence. All rights reserved.
          </p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-brand-steel/40 mt-4 md:mt-0">
            Beyond Time
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
