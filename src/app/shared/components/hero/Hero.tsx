
import '@/app/shared/components/hero/hero.scss'
import { ReactNode } from 'react';
interface HeroContentProps {
    callToActionButton: ReactNode
  }
export default function Hero({ callToActionButton }: HeroContentProps) {
    return (
        <div className="greatingContainer">
            <div className="homeTxt">
                <h1 className="greatingTxt">
                    Welcome to Brolick Fitness
                </h1>
                <p className="invitingTxt">
                Join our community of fitness enthusiasts and start your journey to a healthier, stronger you. Get access to personalized workouts and expert guidance.
                </p>
                {callToActionButton}
            </div>
        </div>
    );
};

