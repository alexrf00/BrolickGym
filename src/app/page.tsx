"use client"
import React from 'react';
import { HeroSection } from '@/components/sections/Hero';
import '@/app/page.scss';
// import { FeatureCardProps } from "./shared/components/FeatureCards/types";
import {Header} from '@/components/layout/Header'
import ClassesSection from '@/components/sections/ClassesSection'
import LocationSection from '@/components/sections/LocationSection'
// import { useSession } from 'next-auth/react';
import { ServicesSection } from '@/components/sections/Services';
import { AboutSection } from '@/components/sections/about';
import { MembershipSection } from '@/components/sections/membership';
import TrainersSectionV2 from '@/components/sections/TrainersV2';
import { CTASection } from '@/components/sections/cta';
import { ContactSection } from '@/components/sections/contact';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { TrainersSection } from '@/components/sections/Trainers';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  // const { data: session } = useSession()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <LocationSection />
        <MembershipSection />
        <ClassesSection />
        <TrainersSection />
        <TrainersSectionV2 />
        <CTASection />
        <ContactSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
