"use client"
import React from 'react';
import GoogleMapLocationComponent from "@/app/shared/components/googleMap/GoogleMapLocation";
import Hero from '@/app/shared/components/hero/Hero';
import '@/app/page.scss';
import { FeatureCardProps } from "./shared/components/FeatureCards/types";
import FeatureCards from "./shared/components/FeatureCards/FeatureCards";
import LoginDialog from './shared/components/LoginDialog/LoginDialog';
import { Button } from '@/components/ui/button';


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

  return (
    <div className="home-container">
      <section>
        <Hero
        callToActionButton={
        <LoginDialog>
            <Button size="lg" variant="default" className="text-lg px-8 cta">
              Start Your Journey
            </Button>
          </LoginDialog>}/>
       
      </section>
      <section className="featureCards-container">
        <FeatureCards featureData={featureCardProp} />
      </section>
      <section>
        <div className="location-container">
          <section className="header">
            <h2>
              Our Location
            </h2>
          </section>
          <section className="main-row">
            <div className="info">
              <div className="location_info">
                <span className='title'>Brolick Gym Inc.</span>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>


                  3005 Fulton St, Brooklyn, NY 11208</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  (718) 552-2024</p>
              </div>
              <div className="workingHours_info">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <div className="hours">
                <p>Monday - Friday: 5am - 11pm</p>
                <p>Saturday - Sunday: 7am - 8pm</p>
              </div>
              </div>
            </div>
            <div className="map-container">
              <GoogleMapLocationComponent />
            </div>
          </section>
        </div>
        {/*
        <div className="navigation-buttons">
          <a
            href={`https://www.google.com/maps?q=${gymLatitude},${gymLongitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-button google-maps"
          >
            Open in Google Maps
          </a>
          <a
            href={`https://waze.com/ul?ll=${gymLatitude},${gymLongitude}&navigate=yes`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-button waze"
          >
            Open in Waze
          </a>
          <a
            href={`https://maps.apple.com/?ll=${gymLatitude},${gymLongitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-button apple-maps"
          >
            Open in Apple Maps
          </a>
        </div>
        */}
      </section>
    </div>
  );
}
