import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Services } from "./Components/Services";
import { Testimonials } from "./Components/Testimonials";

export default function HomePage() {
  return (
    <main className="container">
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
