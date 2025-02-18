import FeatureCard from '@/app/shared/components/FeatureCards/featureCard/FeatureCard'
import '@/app/shared/components/FeatureCards/featureCards.scss'
import { FeatureCardProps } from '@/app/shared/components/FeatureCards/types/index'

export default function FeatureCards({ featureData }: { featureData: FeatureCardProps[] }) {
    return (
        <div className='featureSection'>
            {featureData.map((feature: FeatureCardProps, index: number) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    )
}

