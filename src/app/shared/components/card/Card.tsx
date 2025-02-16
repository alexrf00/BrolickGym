import '@/app/shared/components/card/card.scss'
import React from 'react'

export default function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  )
}