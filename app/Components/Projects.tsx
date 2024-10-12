"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { addBlurDataURL } from "@/lib/generateBlurDataURL"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Key, useMemo, useState } from "react"

interface Project {
  title: string
  image: string
  category: string
}

type GroupedProjects = {
  [key: string]: Awaited<ReturnType<typeof addBlurDataURL<Project>>>
}

interface ProjectsProps {
  groupedProjects: GroupedProjects
}

export const Projects = ({ groupedProjects }: ProjectsProps) => {
  const [selectedNiche, setSelectedNiche] = useState("All")
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

        {/* // + Categorized projects grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-9">
          {groupedProjects[selectedNiche].map((project, index) => (
            <Card key={index} className="border-0 bg-background p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={681}
                height={746}
                loading="lazy"
                placeholder="blur"
                blurDataURL={project?.blurDataUrl}
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
