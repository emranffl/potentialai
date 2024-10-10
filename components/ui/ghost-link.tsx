import { cn } from "@/lib/utils"
import Link from "next/link"

export interface GhostLinkProps {
  link: string
  className?: string
  children?: React.ReactNode
}

const GhostLink = ({ link = "#", className, children }: GhostLinkProps) => {
  children = children || <>See more &rarr;</>
  return (
    <>
      <Link
        href={link}
        target="_self"
        referrerPolicy="same-origin"
        className={cn(
          "transition-color mt-2 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 pl-0 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:text-primary/80 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
      >
        {children}
      </Link>
    </>
  )
}

export default GhostLink
