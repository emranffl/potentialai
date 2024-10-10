"use client"

import { cn } from "@/lib/utils"
import DOMPurify from "dompurify"
import { useEffect, useState } from "react"

export interface SVGImageProps {
  url: string
  containerClassName?: string
}

const SVGImage = ({ url, containerClassName }: SVGImageProps) => {
  const [svg, setSvg] = useState<string>("")

  useEffect(() => {
    fetch(url, {
      mode: "no-cors",
      next: { revalidate: 60 * 60 /** cache 10 min */ },
    })
      .then((res) => res.text())
      .then(setSvg)
      .catch((err) => console.log(err))
  }, [url])

  return (
    <div
      className={cn("", containerClassName)}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(svg) }}
    />
  )
}

export default SVGImage
