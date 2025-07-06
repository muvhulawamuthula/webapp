
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl">ATCOM Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of electrical and engineering solutions across South Africa. 
              Committed to quality, innovation, and excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-orange-400">Home</a></li>
              <li><a href="#company" className="text-gray-400 hover:text-orange-400">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400">Services</a></li>
              <li><a href="#contacts" className="text-gray-400 hover:text-orange-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 info@atcomgroup.co.za</p>
              <p>📞 +27 10 745 6621</p>
              <p>🏢 BBB-EE Level 1 Accredited</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ATCOM Group (PTY) LTD. All rights reserved. | BBB-EE Level 1 | 100% Black Owned
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
