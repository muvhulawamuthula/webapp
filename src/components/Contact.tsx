
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const locations = [
    {
      region: "North West",
      address: "Plot 123 Rietfontein, Haartebeesport, 0260"
    },
    {
      region: "Gauteng",
      address: "Unit 9, Canberra Industrial Park, 24 Derick Coetzee St, Jet Park, Johannesburg, 1459"
    },
   
    {
      region: "Limpopo",
      address: "213 Mapodile, Thusong Service Centre, Steelpoort, 1133"
    },
    {
      region: "Mpumalanga",
      address: "5 Duncan Street Emalahleni, 1035"
    }
  ];

  return (
    <section id="contacts" className="py-20 px-6 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Get in touch with us for professional engineering solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-orange-500 text-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-xl">📞</span>
              </div>
              <CardTitle>Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-2">+27 10 745 6621</p>
              <p className="mb-2">+27 76 958 3946</p>
              <p>+27 84 771 3392</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700 text-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📧</span>
              </div>
              <CardTitle>Email Address</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>info@atcomgroup.co.za</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700 text-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🏢</span>
              </div>
              <CardTitle>Company Status</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-2">BBB-EE Level 1</p>
              <p>100% Black Owned</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Locations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="bg-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="text-orange-500 text-lg">{location.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{location.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Get A Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
