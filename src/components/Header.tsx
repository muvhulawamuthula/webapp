
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-xl">ATCOM Group</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#company" className="hover:text-orange-400 transition-colors">Company</a>
          <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
          <a href="#news" className="hover:text-orange-400 transition-colors">News</a>
          <a href="#contacts" className="hover:text-orange-400 transition-colors">Contacts</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Get A Quote
          </Button>
          <div className="text-right">
            <div className="text-sm">📞 +27 10 745 6621</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
