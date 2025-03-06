import Image from "next/image"
import LoginDialog from '@/app/shared/components/LoginDialog/LoginDialog'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <Image
        src="/assets/images/manRowingB.png"
        alt="Person using rowing machine"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Transform Your Body,
          <br />
          Transform Your Life
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white">
          Join our community of fitness enthusiasts and start your journey to a healthier, stronger you.
        </p>
        <LoginDialog>
          <Button
            size="lg"
            variant="default"
            className="text-primary hover:bg-red-600 text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            Start Your Journey
          </Button>
        </LoginDialog>
      </div>
    </section>
  )
}

