"use client"

import Logo from "@/components/Logo"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import { LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { Fragment, useState } from "react"

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  const handleHamburger = () => {
    if (!navOpen) {
      setNavOpen(true)
    } else {
      setNavOpen(false)
    }
  }

  return (
    <header className={cn("sticky top-0 z-50 bg-background px-8 py-6 dark:border-b")}>
      {/* // + mobile nav */}
      <div className="container flex items-center justify-between px-0 xl:hidden">
        <Logo monogram className="h-8" />
        <div className="flex items-center gap-2">
          {!navOpen && <ModeToggle />}
          <Button
            size={"icon"}
            variant={"outline"}
            className="border-0 shadow-none"
            onClick={handleHamburger}
          >
            <HamburgerMenuIcon
              className={cn(
                "absolute size-5 rotate-0 scale-100 transform transition",
                // scrolling ? "text-foreground" : "text-foreground dark:text-foreground",
                navOpen && "rotate-90 scale-0",
              )}
            />
            <Cross1Icon
              className={cn(
                "absolute size-5 -rotate-90 scale-0 transform transition-transform",
                // scrolling ? "text-foreground" : "text-foreground dark:text-foreground",
                navOpen && "rotate-0 scale-100",
              )}
            />
          </Button>
        </div>
      </div>

      {navOpen && (
        <div
          className={cn(
            "absolute left-0 right-0 top-20 h-[100dvh] bg-gradient-to-b from-background via-background backdrop-blur transition lg:hidden",
          )}
        >
          {/* // + mob nav back button */}
          <div className="container mt-20 space-y-4">
            {/* // + mob nav items */}
            {LINKS.map((item, index) => {
              const className = cn(
                "flex items-center py-2 text-xl opacity-75 transition-opacity hover:opacity-100 active:text-primary hover:cursor-pointer pl-2",
                typeof window !== "undefined" &&
                  window.location.hash.includes(item.title.toLowerCase()) &&
                  "text-highlight opacity-100",
              )
              const animationDelay = 0.05

              return (
                <Fragment key={item.title}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -104,
                    }}
                    transition={{
                      // duration: duration,
                      type: "tween",
                      delay: animationDelay * index,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                  >
                    <Link onClick={handleHamburger} href={item.href} className={className}>
                      {item.title}
                    </Link>
                  </motion.div>
                </Fragment>
              )
            })}
          </div>
        </div>
      )}

      {/* // + desktop nav */}
      <div className="container hidden items-center justify-between xl:flex">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="space-x-6">
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
          <Button>Download CV</Button>
          <ModeToggle className="border-0" />
        </div>
      </div>
    </header>
  )
}
