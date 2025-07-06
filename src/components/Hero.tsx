
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Provide Effective
              <br />
              <span className="text-orange-500">Engineering Solutions!</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              A leading electrical developer of Grade A commercial, industrial and residential 
              projects in South Africa. ATCOM Group has decided to innovate year 
              after year, with its staff and delivering accordingly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Our Services
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800 px-8 py-3">
                More About Us
              </Button>
            </div>
          </div>
          
          <div className="bg-orange-500 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">A Leading Developer Of Grade A Commercial & Residential Projects</h3>
            <p className="mb-4">
              ATCOM Group has over 10+ years of experience and has employed over 400 professionals 
              to work on projects all Over The World.
            </p>
            <Button className="bg-white text-orange-500 hover:bg-gray-100">
              Learn More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
