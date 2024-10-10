import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Services } from "./Components/Services";
import { Testimonials } from "./Components/Testimonials";

export default function HomePage() {
  return (
    <>
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
