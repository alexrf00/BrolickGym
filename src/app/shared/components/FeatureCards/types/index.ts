import type { ReactNode } from "react"

export interface FeatureCardProps {
  icon: ReactNode
  badge: string
  title: string
  description: string
  details: string[]
}

