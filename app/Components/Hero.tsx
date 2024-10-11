"use client"
import { Socials } from "@/components/Socials"
import { Button } from "@/components/ui/button"
import { ANIMATION_VARIANTS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"
import heroImg from "/public/images/hero.png"
import overlayImg from "/public/images/overlay-rect.png"

export const Hero = () => {
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
    <section id="home" className="relative mb-16 md:mt-4">
      <div className="container flex items-center justify-center pb-2 pt-10 sm:py-28">
        <div className="grid-cols-2 gap-8 lg:grid">
          <div className="flex items-center">
            <div className="space-y-4">
              {/*//+ intro */}
              <div className="!-mb-5">
                <motion.span
                  variants={ANIMATION_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  transition={ANIMATION_VARIANTS.transitionOverline}
                  className="block rounded-full py-2 text-base font-semibold leading-9 sm:text-2xl md:text-left"
                >
                  Hi I am
                </motion.span>
                <motion.span
                  variants={ANIMATION_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  transition={ANIMATION_VARIANTS.transitionOverline}
                  className="block rounded-full py-2 text-base font-semibold leading-9 text-highlight sm:text-3xl md:text-left"
                >
                  Muhammad Umair
                </motion.span>
              </div>

              {/*//+ display text */}
              <motion.h1
                variants={ANIMATION_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={ANIMATION_VARIANTS.transitionDisplayText}
                className={cn("font-bold text-foreground sm:text-8xl")}
              >
                UI & UX <span className="2xl:ml-52">Designer</span>
              </motion.h1>

              {/*//+ lead text */}
              <motion.p
                variants={ANIMATION_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={ANIMATION_VARIANTS.transitionLeadText}
                className="lead pt-3 min-[2048px]:text-balance"
              >
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus
                in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
              </motion.p>

              {/* //+ button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ y: 0, opacity: 1 }}
                transition={ANIMATION_VARIANTS.transitionHeroButtons}
                className="flex gap-x-4"
              >
                <Button className="w-28">Hire Me</Button>
              </motion.div>
            </div>
          </div>

          {/* //+ image overlay */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={ANIMATION_VARIANTS.transitionHeroImageOverlay}
              className="invisible absolute top-16 z-10 2xl:visible 2xl:left-28"
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
            {/* //+ image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={ANIMATION_VARIANTS.transitionHeroImage}
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

              {/* // + socials */}
              <div className="flex justify-center">
                <Socials />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
