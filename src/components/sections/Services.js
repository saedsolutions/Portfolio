// src/components/sections/Services.js
import { Card, CardContent } from '../ui/card.js';
import { CodeIcon, DesignIcon, RocketIcon } from '../icons/Icons';

export function Services() {
  const services = [
    {
      icon: <CodeIcon className="w-12 h-12 text-blue-500" />,
      title: "Web Development",
      description: "Creating fast and scalable websites using modern frameworks."
    },
    {
      icon: <DesignIcon className="w-12 h-12 text-blue-500" />,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces."
    },
    {
      icon: <RocketIcon className="w-12 h-12 text-blue-500" />,
      title: "SEO Optimization",
      description: "Helping businesses rank higher on search engines."
    }
  ];

  return (
    <section className="py-20 container mx-auto text-center px-4">
      <h2 className="text-3xl font-semibold">What I Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}