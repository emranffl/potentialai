"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    image: "/images/testimonials/1.jpeg",
    content:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/images/testimonials/2.jpeg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aliquid at sequi. Eum debitis aspernatur molestias nemo delectus nulla id.",
  },
  {
    name: "Kenedy",
    role: "Designer",
    image: "/images/testimonials/1.jpeg",
    content:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum conv.",
  },
  {
    name: "Bob",
    role: "Developer",
    image: "/images/testimonials/2.jpeg",
    content:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tell arcu condimentum. Augue dictum dolor elementum convallis",
  },
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // * Animation variants
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  // * auto play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [paused])

  // * Handle Next and Previous
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16">
      <h2 className="text-center">Testimonials</h2>
      <p className="mx-auto max-w-4xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut nesciunt
        dignissimos, soluta rerum enim non unde esse ducimus exercitationem.
      </p>

      <div className="mt-10 flex justify-center">
        <div className="relative w-full max-w-3xl">
          {/* // + Testimonial Card */}
          <div className="overflow-hidden p-1">
            <motion.div
              className="mx-auto flex flex-col space-y-6 rounded-lg bg-card p-6 md:flex-row md:items-center md:space-x-6 md:space-y-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -50) {
                  handleNext()
                } else if (info.offset.x > 50) {
                  handlePrev()
                }
              }}
              variants={slideVariants}
              key={currentIndex}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* // + Image */}
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image}
                  alt="testimonial avatar"
                  width={160}
                  height={160}
                  className="mx-auto size-40 rounded-full object-cover object-center md:mx-0"
                />
              </div>

              {/* // + Testimonial content */}
              <div className="space-y-4">
                <div>
                  <span className="text-3xl leading-none text-highlight">“</span>
                  <p className="inline h-40 pl-1 text-base text-[#424242]">
                    {testimonials[currentIndex].content}
                  </p>
                  <span className="inline text-right text-3xl leading-none text-highlight">“</span>
                </div>

                {/* // + Name and role */}
                <div className="space-y-3 text-center text-black md:text-left">
                  <p className="text-lg font-bold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* // + Carousel indicators */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-3 w-9 rounded-full bg-[#D9D9D9]",
                  currentIndex === index && "bg-highlight",
                )}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
