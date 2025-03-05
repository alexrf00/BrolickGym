import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const features = [
  "10+ years of excellence in fitness",
  "Certified professional trainers",
  "Customized fitness programs",
  "Supportive community atmosphere",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-gray-900 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="About our gym" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">About FitZone</h2>
            <p className="text-white mb-6">
              Founded in 2010, FitZone has been helping people transform their lives through fitness for over a decade.
              Our mission is to provide a welcoming environment where everyone can work towards their health and fitness
              goals.
            </p>
            <p className="text-white mb-6">
              With expert trainers, state-of-the-art equipment, and a supportive community, We&apos;re committed to helping
              you achieve the results you desire.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-white font-semibold">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button>Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

