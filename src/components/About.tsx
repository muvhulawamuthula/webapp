
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="company" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Who Are We?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              ATCOM Group is a private company according to the act of 1973 (Act 61 of 1973), 
              a 100% black owned, BBB-EE level 1 accredited according to Act No.53 of 2003 Code 
              of good practices and was founded by Tebogo Matuludi in 2013. She is a qualified 
              Electrical Engineer and Trade Test in Electrical Engineering.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Her decade years and a half work experience comes from Mining Industries, Eskom and 
              Panel Manufacturing, Transformers and Switchgear Companies with the aim of providing 
              professional services to an industry that has a need for resources to bridge a gap 
              between the companies and their clients.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Engineering Solutions" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-orange-500">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Advancing with the times using state of the art technology and empowering young people.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-orange-500">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Providing quality service and ensuring every project is delivered on time at competitive prices.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-orange-500">Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Building reputation relationships by providing superior service and quality products.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-orange-500">Integrity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Establishing the highest ethical standard and trust with working partners.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
