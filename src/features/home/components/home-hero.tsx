import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomeHero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Gym background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container relative z-10 py-24 md:py-32 text-white">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Transform Your Fitness Journey Today</h1>
          <p className="text-xl text-gray-200">
            Join our premium gym and get access to state-of-the-art facilities, expert trainers, and a supportive
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button size="lg" asChild>
              <Link href="#plans">View Membership</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              <Link href="/locations">Find Locations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
