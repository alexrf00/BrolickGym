"use client"
import type React from "react"
import '@/app/shared/components/FeatureCards/featureCard/featureCard.scss'
import { FeatureCardProps } from '@/app/shared/components/FeatureCards/types/index'
import { useState } from "react"


export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div  className={`featureCard ${isFlipped ? 'flipped' : ""}`}
    >
       <div className='cardInner'>
        <div className='cardFront'>
          <div className="header">
          <div className='featureIcon'  >{icon}</div>
          </div>
          <h3 className='featureTitle'>{title}</h3>
          <p className='featureDescription'>{description}</p>
          <div className="learnMoreWrapper"onClick={() => setIsFlipped(!isFlipped)}>
          <p>Learn More</p><p className="arrow">&rarr;</p>
          </div>

        </div>
        
      </div>
    </div>
  )
}

