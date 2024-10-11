import Logo from "@/components/Logo"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const Navbar = () => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background px-8 py-6 dark:border-b",
        // typeof window !== "undefined" && window.scrollY > 150 && "shadow-sm",
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="space-x-6">
            <Link href="#home" className="text-base">
              Home
            </Link>
            <Link href="#about" className="text-base">
              About Me
            </Link>
            <Link href="#services" className="text-base">
              Services
            </Link>
            <Link href="#projects" className="text-base">
              Projects
            </Link>
            <Link href="#contact" className="text-base">
              Contact
            </Link>
          </nav>
          <Button>Download CV</Button>
          <ModeToggle className="border-0" />
        </div>
      </div>
    </header>
  )
}
