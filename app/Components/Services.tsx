// components/Services.tsx
import { Card } from '@/components/ui/card';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  // { title: 'UI/UX', description: 'User Interface & Experience Design', icon: <IconUI /> },
  // { title: 'Web Design', description: 'Creating responsive web designs', icon: <IconWeb /> },
  // { title: 'App Design', description: 'Designing mobile applications', icon: <IconApp /> },
  // { title: 'Graphic Design', description: 'Logos, branding, and print designs', icon: <IconGraphic /> }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
          <Card key={index} className="p-6">
            <div className="text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
