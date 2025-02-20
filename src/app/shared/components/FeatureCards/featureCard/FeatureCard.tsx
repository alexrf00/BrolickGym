"use client"
import type React from "react"
import '@/app/shared/components/FeatureCards/featureCard/featureCard.scss'
import { FeatureCardProps } from '@/app/shared/components/FeatureCards/types/index'
import { useState } from "react"


export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div  className={`featureCard ${isFlipped ? 'flipped' : ""}`}
    onClick={() => setIsFlipped(!isFlipped)}>
       <div className='cardInner'>
        <div className='cardFront'>
          <div className='featureIcon'  >{icon}</div>
          <h3 className='featureTitle'>{title}</h3>
          <p className='featureDescription'>{description}</p>
          <div className="learnMoreWrapper">
          <p>Learn More</p><p>&rarr;</p>
          </div>

        </div>
        <div className='cardBack'>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

