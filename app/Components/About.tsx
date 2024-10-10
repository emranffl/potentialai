"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion,useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"
import heroImg from "/public/images/hero.png"
import overlayImg from "/public/images/overlay-rect.png"

const transition = {
  type: "spring",
  stiffness: 800,
  damping: 32,
} as const

const GeneralVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
  transition: { ...transition },
  transitionOverline: { ...transition, delay: 0 },
  transitionDisplayText: { ...transition, delay: 0.1 },
  transitionLeadText: { ...transition, delay: 0.2 },
  transitionHeroButtons: { ...transition, delay: 0.4 },
  transitionHeroImage: { ...transition, type: "tween", delay: 0.6, duration: 0.15 },
  transitionHeroImageOverlay: { ...transition, type: "tween", delay: 0.8, duration: 0.35 },
} as const

export const About = () => {
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const opacity = 1 - scrollY / window.innerHeight
      controls.start({ opacity })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  return (
    <section className="relative mb-16 md:mt-4">
      <div className="container flex items-center justify-center py-24 pb-2 sm:py-28">
        <div className="grid-cols-2 gap-8 lg:grid">
          <div className="flex items-center">
            <div className="space-y-4">
              {/*//+ Overline ABBR */}
              <div className="">
                <motion.span
                  variants={GeneralVariants}
                  initial="hidden"
                  animate="visible"
                  transition={GeneralVariants.transitionOverline}
                  className="block rounded-full px-3 py-2 text-[.6rem] font-semibold leading-9 decoration-slate-50/10 underline-offset-8 sm:text-2xl md:text-left"
                >
                  Hi I am
                </motion.span>
                <motion.span
                  variants={GeneralVariants}
                  initial="hidden"
                  animate="visible"
                  transition={GeneralVariants.transitionOverline}
                  className="block rounded-full px-3 py-2 text-[.6rem] font-semibold leading-9 text-highlight decoration-slate-50/10 underline-offset-8 sm:text-3xl md:text-left"
                >
                  Muhammad Umair
                </motion.span>
              </div>

              {/*//+ Display Text */}
              <motion.h1
                variants={GeneralVariants}
                initial="hidden"
                animate="visible"
                transition={GeneralVariants.transitionDisplayText}
                className={cn("font-bold text-foreground sm:text-8xl")}
              >
                UI & UX <span className="2xl:ml-52">Designer</span>
              </motion.h1>

              {/*//+ Lead Text */}
              <motion.p
                variants={GeneralVariants}
                initial="hidden"
                animate="visible"
                transition={GeneralVariants.transitionLeadText}
                className="lead min-[2048px]:text-balance"
              >
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus
                in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
              </motion.p>

              {/* //+ Hero Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ y: 0, opacity: 1 }}
                transition={GeneralVariants.transitionHeroButtons}
                className="flex gap-x-4"
              >
                <Button className="w-28">Hire Me</Button>
              </motion.div>
            </div>
          </div>

          {/* //+ Hero Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={GeneralVariants.transitionHeroImageOverlay}
              className="absolute left-28 top-16 z-10"
            >
              <Image
                src={overlayImg}
                width={375}
                height={0}
                alt="hero"
                style={{ maxWidth: "100%", height: "auto" }}
                priority
                placeholder="blur"
                quality={100}
              />
              <div className="space-y-2 text-center"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={GeneralVariants.transitionHeroImage}
            >
              <Image
                src={heroImg}
                width={520}
                height={0}
                alt="hero"
                className="mx-auto mt-20 lg:mt-0"
                style={{ maxWidth: "100%", height: "auto" }}
                priority
                placeholder="blur"
                quality={100}
              />
              <div className="space-y-2 text-center"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
