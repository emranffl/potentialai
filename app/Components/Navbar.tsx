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
            {[
              {
                title: "Home",
                href: "#home",
              },
              {
                title: "About Me",
                href: "#about",
              },
              {
                title: "Services",
                href: "#services",
              },
              {
                title: "Projects",
                href: "#projects",
              },
              {
                title: "Testimonials",
                href: "#testimonials",
              },
              {
                title: "Contact",
                href: "#contact",
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="text-base">
                {item.title}
              </Link>
            ))}
          </nav>
          <Button>Download CV</Button>
          <ModeToggle className="border-0" />
        </div>
      </div>
    </header>
  )
}
