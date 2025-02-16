"use client"

import { useState } from "react"
import Card from "@/app/shared/components/card/Card"
import type { FeatureCardProps } from "@/app/shared/components/FeatureCards/types"
import "@/app/shared/components/FeatureCards/featureCard/featureCard.scss"

export default function FeatureCard({ icon, badge, title, description, details }: FeatureCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Card
      className={`featureCard ${isFlipped ? 'flipped' : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className='featureCardInner'>
        <div className='featureCardFront'>
          <div className='cardHeader'>
            <div className='iconWrapper'>{icon}</div>
            <span className='badge'>{badge}</span>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='featureCardBack'>
          <h3>{title} Details</h3>
          <ul>
            {details.map((detail:string, index:number) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <a href="#" className='learnMore'>
            Learn More <span className='arrow'>→</span>
          </a>
        </div>
      </div>
    </Card>
  )
}

