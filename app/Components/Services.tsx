import { Card } from "@/components/ui/card"
import uiux from "@/public/images/services/1.png"
import webd from "@/public/images/services/2.png"
import appd from "@/public/images/services/3.png"
import graphd from "@/public/images/services/4.png"
import Image,{ StaticImageData } from "next/image"

interface Service {
  title: string
  description: string
  icon: StaticImageData
}

const services: Service[] = [
  { title: "UI/UX", description: "User Interface & Experience Design", icon: uiux },
  { title: "Web Design", description: "Creating responsive web designs", icon: webd },
  { title: "App Design", description: "Designing mobile applications", icon: appd },
  { title: "Graphic Design", description: "Logos, branding, and print designs", icon: graphd },
]

export const Services = () => {
  return (
    <section id="services" className="px-8 py-16">
      <h2 className="text-center">Services</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        Aliquet donec morbi convallis pretium
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="rounded-[0.875rem] border-0 bg-[#F8F8F8] p-6">
            <div className="grid h-full space-y-3">
              <div className="relative h-auto w-20">
                <Image src={service.icon} alt={service.title} height={70} className="" />
              </div>
              <h5 className="mt-auto text-black">{service.title}</h5>
              <p className="text-[19px] text-black">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
