import Logo from "@/components/Logo"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Navbar = () => {
  return (
    <header className="container flex items-center justify-between px-8 py-6">
      <Logo />
      <div className="flex items-center gap-4">
        <nav className="space-x-6">
          <Link href="#home">Home</Link>
          <Link href="#about">About Me</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <Button>Download CV</Button>
        <ModeToggle className="border-0" />
      </div>
    </header>
  )
}
