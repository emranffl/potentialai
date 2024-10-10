import { cn } from "@/lib/utils"

export interface ErrorProps {
  children: React.ReactNode
  className?: string
  renderAs?: React.ElementType
}

const Error = ({ children, className, renderAs = "small" }: ErrorProps) => {
  const Component = renderAs
  return <Component className={cn("text-destructive", className)}>{children}</Component>
}

export default Error
