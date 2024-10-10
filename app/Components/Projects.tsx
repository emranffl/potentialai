import { Card } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  { title: "AI Landing Page Design", image: "/project1.jpg", category: "Web Design" },
  { title: "Business Landing Page", image: "/project2.jpg", category: "App Design" },
  { title: "Ecom Web Page Design", image: "/project3.jpg", category: "Graphic Design" },
]

export const Projects = () => {
  return (
    <section id="projects" className="px-8 py-16">
      <h2 className="text-center text-4xl font-bold">My Projects</h2>
      <div className="mt-6 flex justify-center">
        <div className="space-x-4">
          <button className="text-gray-500">All</button>
          <button className="text-gray-500">Web Design</button>
          <button className="text-gray-500">App Design</button>
          <button className="text-gray-500">Graphic Design</button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="p-6">
            <Image src={project.image} alt={project.title} width={350} height={200} />
            <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-500">{project.category}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
