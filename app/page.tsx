import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Hero } from "./Components/Hero"
import { Projects } from "./Components/Projects"
import { Services } from "./Components/Services"
import { Testimonials } from "./Components/Testimonials"

export default function HomePage() {
  return (
    <main className="container">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
