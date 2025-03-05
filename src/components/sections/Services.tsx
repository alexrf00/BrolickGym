import type React from "react"
import { Dumbbell, Users, Clock, Award } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art fitness equipment for all your workout needs.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Energetic group classes led by expert instructors.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule with round-the-clock gym access.",
  },
  {
    icon: Award,
    title: "Personal Training",
    description: "One-on-one sessions with certified personal trainers.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="max-w-2xl mx-auto text-white">
            We offer a wide range of fitness services to help you achieve your goals, no matter your fitness level.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <Icon className="h-10 w-10 text-primary mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

