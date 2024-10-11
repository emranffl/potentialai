"use client"

import { Progress } from "@/components/ui/progress"
import { GeneralVariants } from "@/lib/constants"
import { motion,useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"
import aboutImg from "/public/images/about.png"
import overlayImg from "/public/images/overlay-rect.png"

const About = () => {
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
    <section id="about" className="px-8 py-16">
      <div className="container grid-cols-2 gap-8 lg:grid">
        <div className="relative min-h-64 md:min-h-80">
          {/* //+ image overlay */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={GeneralVariants.transitionHeroImageOverlay}
              className="invisible absolute top-16 z-10 2xl:visible 2xl:left-24"
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
              transition={GeneralVariants.transitionHeroImage}
            >
              <Image
                src={aboutImg}
                width={520}
                height={0}
                alt="hero"
                className="mx-auto mt-20 lg:mt-0"
                style={{ maxWidth: "100%", height: "auto" }}
                priority
                placeholder="blur"
                quality={100}
              />
            </motion.div>
          </div>
        </div>
        <div className="space-y-6">
          <h2>About Me</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>
          <div className="space-y-4">
            {[
              { name: "UX", progress: 90 }, // You can set progress values as needed
              { name: "Website Design", progress: 85 },
              { name: "App Design", progress: 95 },
              { name: "Graphic Design", progress: 89 },
            ].map(({name, progress}) => (
              <div key={name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h5>{name}</h5>
                  {/* <span className="text-highlight">{progress}%</span> */}
                </div>
                <Progress value={progress} className="h-2 bg-slate-200 dark:bg-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }
