import React from "react"

import { Dock, DockIcon } from "@/components/magicui/dock"
import Facebook from "./SocialIcons/Facebook"
import Instagram from "./SocialIcons/Instagram"
import LinkedIn from "./SocialIcons/LinkedIn"
import Twitter from "./SocialIcons/Twitter"

export type IconProps = React.HTMLAttributes<SVGElement>

export function Socials() {
  const className = "size-10 hover:border rounded-full p-1"

  return (
    <div className="relative">
      <Dock direction="middle" className="border-none">
        <DockIcon>
          <Facebook href="https://www.facebook.com/" className={className} />
        </DockIcon>
        <DockIcon>
          <Twitter href="https://twitter.com/" className={className} />
        </DockIcon>
        <DockIcon>
          <Instagram href="https://www.instagram.com/" className={className} />
        </DockIcon>
        <DockIcon>
          <LinkedIn href="https://www.linkedin.com/" className={className} />
        </DockIcon>
      </Dock>
    </div>
  )
}
