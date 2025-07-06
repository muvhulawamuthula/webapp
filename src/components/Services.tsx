
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Maintenance, New Installations & Services",
      subtitle: "(LV & MV Systems)",
      description: "Design, Supply and Install including upgrade/retrofit of MCC's, Starter Enclosures, Distribution Boards, Isolators. Support MV & LV Over headlines design and installation.",
      icon: "🔧"
    },
    {
      title: "Electrical & Instrumentation",
      subtitle: "Engineering Services",
      description: "PLC wiring, upgrade and programming. Software troubleshooting and Upgrade. VSD installations. Programming and Maintenance Support.",
      icon: "⚡"
    },
    {
      title: "Shutdown Labour Support",
      subtitle: "Professional Support",
      description: "We provide professional labour support on projects within the Mining, Smelters and Energy Companies during shutdowns. Qualified Trade tested Electricians, Fitters, Boilermakers.",
      icon: "👷"
    },
    {
      title: "Supply & Procurement",
      subtitle: "Equipment & Spares",
      description: "Switchgear LVs & MVs, Motors, Pumps, Valves, Mechanical & Electrical tools, PPE, Engineering Testers, Safety Consumables, Pipes and Accessories.",
      icon: "📦"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Service Offerings</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our extensive services allows our team to provide attention to detail while ensuring 
            the best possible solutions for our clients across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-lg text-slate-800">{service.title}</CardTitle>
                <p className="text-orange-500 font-semibold text-sm">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• Street lights Installation and Maintenance</li>
              <li>• MV and LV: Cabling, Design and New Installations</li>
              <li>• Cable Fault Finding and Repairs</li>
              <li>• Valve Installation & Sensors</li>
            </ul>
            <ul className="space-y-2">
              <li>• MV switchgears Primary & Secondary injection</li>
              <li>• Complete electrical system installation</li>
              <li>• Generator or UPS installation</li>
              <li>• Transformer Installation</li>
            </ul>
            <ul className="space-y-2">
              <li>• Building electrical wiring (commercial)</li>
              <li>• Substation Equipment Testing & Commissioning</li>
              <li>• Transformer Testing & Refurbishments</li>
              <li>• Issue Compliance Certificates (COC)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
