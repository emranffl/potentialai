const transition = {
  type: "spring",
  stiffness: 800,
  damping: 32,
} as const

export const GeneralVariants = {
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
