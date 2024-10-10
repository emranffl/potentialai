import { cn } from "@/lib/utils"
import Link from "next/link"

export interface FacebookProps {
  href: string
  width?: string
  height?: string
  className?: string
}

export default function Facebook({ href, width = "33", height = "33", className }: FacebookProps) {
  return (
    <Link href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={cn("aspect-square", className)}
      >
        <path
          d="M32.4752 16.2376C32.4752 7.26983 25.2054 0 16.2376 0C7.26983 0 0 7.26983 0 16.2376C0 24.3422 5.93783 31.0598 13.7005 32.278V20.9313H9.57766V16.2376H13.7005V12.6603C13.7005 8.59072 16.1247 6.34282 19.8337 6.34282C21.6097 6.34282 23.4684 6.65996 23.4684 6.65996V10.6559H21.421C19.404 10.6559 18.7748 11.9077 18.7748 13.1931V16.2376H23.2782L22.5582 20.9313H18.7748V32.278C26.5374 31.0598 32.4752 24.3422 32.4752 16.2376Z"
          // fill="black"
        />
      </svg>
    </Link>
  )
}
