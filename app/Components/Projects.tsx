"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Key, useMemo, useState } from "react"

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
  { title: "Ecom Web Page Design", image: "/images/projects/3.png", category: "Web Design" },
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

// group projects by category
const categorizedProjects = projects.reduce((acc: GroupedProjects, project: Project) => {
  const key = project.category.trim()
  if (!acc[key]) {
    acc[key] = []
  }
  acc[key].push(project)
  return acc
}, {})

export const Projects = () => {
  const [selectedNiche, setSelectedNiche] = useState("All")
  let groupedProjects: GroupedProjects = {}
  groupedProjects["All"] = projects
  groupedProjects = {
    ...groupedProjects,
    ...categorizedProjects,
  }
  groupedProjects = useMemo(() => groupedProjects, [])

  return (
    <section id="projects" className="py-16">
      <div className="space-y-10 sm:space-y-16">
        <div>
          <h2 className="text-center">My Projects</h2>
          <p className="mx-auto max-w-4xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut nesciunt
            dignissimos, soluta rerum enim non unde esse ducimus exercitationem.
          </p>
        </div>
        <div className="grid overflow-x-scroll">
          <div className="mx-auto min-w-[700px] space-x-4 pb-2">
            {Object.keys(groupedProjects).map((nicheName: string, index: Key) => (
              <Button
                key={index}
                variant="secondary"
                className={cn(
                  "rounded-lg border-[0.4px]",
                  selectedNiche === nicheName &&
                    "bg-highlight text-white hover:bg-highlight dark:text-white",
                )}
                size="lg"
                onClick={() => setSelectedNiche(nicheName)}
              >
                {nicheName}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-9">
          {groupedProjects[selectedNiche].map((project, index) => (
            <Card key={index} className="border-0 bg-background p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                loading="lazy"
                placeholder="empty"
                className="rounded-xl"
              />
              <div className="mt-6 space-y-2">
                <p className="text-[19px] text-highlight">{project.category}</p>
                <h5 className="text-2xl">{project.title}</h5>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
