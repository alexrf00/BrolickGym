"use client"
import React from 'react';
import GoogleMapLocationComponent from "@/app/shared/components/googleMap/GoogleMapLocation";
import Hero from '@/app/shared/components/hero/Hero';
import '@/app/page.scss';
import { FeatureCardProps } from "./shared/components/FeatureCards/types";
import FeatureCards from "./shared/components/FeatureCards/FeatureCards";
import LoginDialog from './shared/components/LoginDialog/LoginDialog';
import { Button } from '@/components/ui/button';
import Header from '@/app/shared/components/header/Header'
import ClassesSection from '@/app/shared/components/classesSection/ClassesSection'
import TrainersSection from '@/app/shared/components/trainersSection/TrainersSection'
import LocationSection from '@/app/shared/components/locationSection/LocationSection'
import Footer from './shared/components/footer/Footer';


const featureCardProp: FeatureCardProps[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none" stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
        <line x1="16" y1="8" x2="2" y2="22"></line>
        <line x1="17.5" y1="15" x2="9" y2="15"></line>
      </svg>
    ),
    badge: "Premium",
    title: "Cutting-Edge Equipment",
    description:
      "Experience fitness with our state-of-the-art machines and free weights, designed for optimal performance and results.",
    details: [
      "Latest cardio machines with integrated screens",
      "Full range of free weights up to 150lbs",
      "Specialized functional training area",
      "Recovery zone with foam rollers and stretch equipment",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none" stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    badge: "Popular",
    title: "Expert Personal Training",
    description:
      "Transform your body and mind with our certified trainers, offering personalized guidance and motivation.",
    details: [
      "One-on-one personalized sessions",
      "Small group training options",
      "Nutrition planning and support",
      "Progress tracking and goal setting",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none" stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    badge: "Flexible",
    title: "Diverse Class Schedule",
    description:
      "Energize your routine with our wide range of group fitness classes, from high-intensity workouts to mindful practices.",
    details: [
      "High-Intensity Interval Training (HIIT)",
      "Yoga and Pilates sessions",
      "Spin classes with virtual rides",
      "Strength and conditioning workshops",
    ],
  },
];

export default function HomePage() {
//   <LoginDialog>
//   <Button size="lg" variant="default" className="text-lg px-8 cta">
//     Start Your Journey
//   </Button>
// </LoginDialog>}/>
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <ClassesSection />
        <TrainersSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
