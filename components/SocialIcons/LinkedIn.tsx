import { cn } from "@/lib/utils"
import Link from "next/link"

export interface LinkedInProps {
  href: string
  width?: string
  height?: string
  className?: string
}

export default function LinkedIn({ href, width = "24", height = "24", className }: LinkedInProps) {
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
        <path d="M19.2002 3.19995H4.8002C3.9162 3.19995 3.2002 3.91595 3.2002 4.79995V19.2C3.2002 20.084 3.9162 20.8 4.8002 20.8H19.2002C20.0842 20.8 20.8002 20.084 20.8002 19.2V4.79995C20.8002 3.91595 20.0842 3.19995 19.2002 3.19995ZM8.7634 17.6H6.40339V10.0064H8.7634V17.6ZM7.5594 8.92075C6.7986 8.92075 6.1834 8.30395 6.1834 7.54475C6.1834 6.78555 6.7994 6.16955 7.5594 6.16955C8.3178 6.16955 8.9346 6.78635 8.9346 7.54475C8.9346 8.30395 8.3178 8.92075 7.5594 8.92075ZM17.6034 17.6H15.245V13.9072C15.245 13.0264 15.229 11.8936 14.0186 11.8936C12.7906 11.8936 12.6018 12.8528 12.6018 13.8432V17.6H10.2434V10.0064H12.5074V11.044H12.5394C12.8546 10.4472 13.6242 9.81755 14.7722 9.81755C17.1618 9.81755 17.6034 11.3904 17.6034 13.4352V17.6Z" />
      </svg>
    </Link>
  )
}
