import { addBlurDataURL } from "@/lib/generateBlurDataURL"
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import Footer from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Projects } from "./Components/Projects"
import { Services } from "./Components/Services"
import { Testimonials } from "./Components/Testimonials"

export default async function HomePage() {
  const projects = [
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
  const projectsWithBlurDataURL = await addBlurDataURL<(typeof projects)[0]>({
    arr: projects,
    key: "image",
  })

  type GroupedProjects = {
    [key: string]: typeof projectsWithBlurDataURL
  }

  // group projects by category
  const categorizedProjects = projectsWithBlurDataURL.reduce(
    (acc: GroupedProjects, project: (typeof projectsWithBlurDataURL)[0]) => {
      const key = project.category.trim()
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(project)
      return acc
    },
    {},
  )

  let groupedProjects: GroupedProjects = {}
  groupedProjects["All"] = projectsWithBlurDataURL
  groupedProjects = {
    ...groupedProjects,
    ...categorizedProjects,
  }

  return (
    <>
      <main className="container">
        <Hero />
        <About />
        <Services />
        <Projects groupedProjects={groupedProjects} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
