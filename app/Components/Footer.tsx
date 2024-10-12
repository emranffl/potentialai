"use client"

import Logo from "@/components/Logo"
import { Socials } from "@/components/Socials"
import { LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Footer = () => {
  // const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F8F8F8] dark:bg-[#121212]">
      <div className="container py-8">
        <div className="mt-20 flex flex-col items-center space-y-8 md:space-y-16">
          <Logo className="h-8" />
          <nav className="flex flex-col items-center gap-4 sm:flex-row">
            {LINKS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-base hover:text-highlight",
                  typeof window !== "undefined" &&
                    window.location.hash.includes(item.title.toLowerCase()) &&
                    "text-highlight",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <Socials />
        </div>
      </div>
      <div className="mt-8 bg-[#545454] py-6 text-gray-500 dark:border-t dark:bg-[#121212]">
        <small className="mb-0 text-center text-sm text-white">
          © 2023 <span className="text-highlight">Mumair</span> All Rights Reserved, Inc.
        </small>
      </div>
    </footer>
  )
}

export default Footer
