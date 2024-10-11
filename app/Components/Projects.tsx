"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Key, useState } from "react"

type Project = {
  title: string
  image: string
  category: string
}

const projects: Project[] = [
  // ui/ux
  {
    title: "Portfolio Design",
    image: "/images/projects/1.png",
    category: "UI/UX",
  },
  { title: "Ecom App Design", image: "/images/projects/2.png", category: "UI/UX" },
  {
    title: "Dashboard Design",
    image: "/images/projects/3.png",
    category: "UI/UX",
  },
  // web design
  {
    title: "Product Landing Page Design",
    image: "/images/projects/1.png",
    category: "Web Design",
  },
  {
    title: "Business Landing Page Design",
    image: "/images/projects/2.png",
    category: "Web Design",
  },
  { title: "Ecom Web Page Design", image: "/images/projects/3.png", category: "Web Design " },
  // app design
  {
    title: "Ecom App Design",
    image: "/images/projects/1.png",
    category: "App Design",
  },
  { title: "Social App Design", image: "/images/projects/2.png", category: "App Design" },
  { title: "Music App Design", image: "/images/projects/3.png", category: "App Design" },
  // graphic design
  {
    title: "Logo Design",
    image: "/images/projects/1.png",
    category: "Graphic Design",
  },
  {
    title: "Branding Design",
    image: "/images/projects/2.png",
    category: "Graphic Design",
  },
  {
    title: "Print Design",
    image: "/images/projects/3.png",
    category: "Graphic Design",
  },
]

type GroupedProjects = {
  [key: string]: Project[]
}

let groupedProjects: GroupedProjects = {}
groupedProjects["All"] = projects
// @ts-expect-error
groupedProjects = {
  ...groupedProjects,
  ...Object.groupBy(projects, ({ category }) => category.trim()),
}

export const Projects = () => {
  const [selectedNiche, setSelectedNiche] = useState("All")

  return (
    <section id="projects" className="px-8 py-16">
      <div className="space-y-10 sm:space-y-16">
        <div>
          <h2 className="text-center">My Projects</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus
            lectus. Phasellus consequat urna tellus
          </p>
        </div>
        <div className="flex justify-center">
          <div className="space-x-4">
            {Object.keys(groupedProjects).map((nicheName: string, index: Key) => (
              <Button
                key={index}
                variant="secondary"
                className={cn(
                  "rounded-lg border-[0.4px]",
                  selectedNiche === nicheName && "hover:bg-highlight/50 bg-highlight text-white",
                )}
                size="lg"
                onClick={() => setSelectedNiche(nicheName)}
              >
                {nicheName}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groupedProjects[selectedNiche].map((project, index) => (
            <Card key={index} className="border-0 p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                loading="lazy"
                placeholder="empty"
              />
              <div className="mt-6 space-y-2">
                <p className="text-highlight text-[19px]">{project.category}</p>
                <h5 className="text-2xl">{project.title}</h5>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
