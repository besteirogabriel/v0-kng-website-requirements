import type React from "react"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHero({ title, description, className, children }: PageHeroProps) {
  return (
    <section className={cn("bg-gradient-to-b from-[#006DF0]/10 to-transparent py-16 md:py-24", className)}>
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
          {description && <p className="text-xl text-muted-foreground">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
