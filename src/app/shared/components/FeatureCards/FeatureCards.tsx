import FeatureCard from '@/app/shared/components/FeatureCards/featureCard/FeatureCard'
import '@/app/shared/components/FeatureCards/featureCards.scss'
import { FeatureCardProps } from '@/app/shared/components/FeatureCards/types'

export default function FeatureCards({ featureData }: { featureData: FeatureCardProps[] }) {
    return (
        <div className="featureCards__wrapper">
            <div className='featureCards-container'>
                <h2>
                    Elevate Your Fitness Journey
                </h2>
                <div className='featureCards'>
                    {featureData.map((feature: FeatureCardProps, index: number) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    )
}

