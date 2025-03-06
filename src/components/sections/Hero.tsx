import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

export function HeroSection() {
  const { data: session } = useSession()

  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/manRowingB.png"
          alt="Gym background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Build Your Body, <span className="text-primary">Transform</span> Your Life
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          Join our state-of-the-art fitness center and start your journey to a healthier, stronger you with expert
          trainers and premium equipment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {session ? (
            <Button size="lg">View Your Dashboard</Button>
          ) : (
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          )}
          <Button
            variant="outline"
            size="lg"
            className="bg-background/20 hover:bg-background/30 text-white border-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

