// components/Services.tsx
import { Card } from "@/components/ui/card"

interface Service {
  title: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  // { title: 'UI/UX', description: 'User Interface & Experience Design', icon: <IconUI /> },
  // { title: 'Web Design', description: 'Creating responsive web designs', icon: <IconWeb /> },
  // { title: 'App Design', description: 'Designing mobile applications', icon: <IconApp /> },
  // { title: 'Graphic Design', description: 'Logos, branding, and print designs', icon: <IconGraphic /> }
]

export const Services = () => {
  return (
    <section id="services" className="px-8 py-16">
      <h2 className="text-center text-4xl font-bold">Services</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
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
  )
}
