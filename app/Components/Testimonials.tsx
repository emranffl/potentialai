"use client"

import { Carousel,CarouselContent,CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import React,{ useCallback,useEffect,useState } from "react"

export const Testimonials = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  // Embla carousel initialization
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false }, [
    plugin.current,
  ])

  const [selectedIndex, setSelectedIndex] = useState(0)

  // Callback to update the active slide index
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="px-8 py-16">
      <h2 className="text-center">Testimonials</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        Aliquet donec morbi convallis pretium
      </p>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Embla ref should be applied here directly to the scroll container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              {/* CarouselContent becomes the scrollable container for Embla */}
              <CarouselContent className="flex">
                {Array.from({ length: 2 }).map((_, index) => (
                  <CarouselItem key={index} className="flex-0 carousel-item w-full">
                    <div className="p-1">
                      <div className="mx-auto flex flex-col space-y-6 rounded-lg bg-card p-6 dark:bg-gray-800 md:flex-row md:items-center md:space-x-6 md:space-y-0">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <Image
                            src={`/images/testimonials/${selectedIndex + 1}.jpeg`}
                            alt="testimonial avatar"
                            width={160}
                            height={160}
                            className="size-40 rounded-full object-cover object-center"
                          />
                        </div>

                        {/* Testimonial content */}
                        <div className="space-y-4">
                          <div className="">
                            <span className="text-3xl leading-none text-highlight">“</span>
                            <p className="inline pl-1 text-base">
                              Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.
                              Id leo urna velit neque mattis id tellus arcu condimentum. Augue
                              dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                            </p>
                            <span className="inline text-right text-3xl leading-none text-highlight">
                              “
                            </span>
                          </div>

                          <div className="space-y-3 text-center md:text-left">
                            {/* Name and role */}
                            <div>
                              <p className="text-lg font-bold text-gray-900 dark:text-white">
                                Name
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Carousel indicators */}
              <div className="mt-6 flex justify-center space-x-2">
                {Array.from({ length: 2 }).map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-3 w-9 rounded-full bg-[#D9D9D9]",
                      selectedIndex === index && "bg-highlight",
                    )}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  ></button>
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
