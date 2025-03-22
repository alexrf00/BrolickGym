import Image from "next/image"

const trainers = [
  {
    name: "Alex Johnson",
    specialty: "Strength Training",
    description: "Certified strength coach with 8 years of experience helping clients build muscle and strength.",
  },
  {
    name: "Sarah Miller",
    specialty: "Yoga & Pilates",
    description: "Specialized in yoga and pilates with a focus on flexibility, core strength, and mindfulness.",
  },
  {
    name: "Mike Davis",
    specialty: "Cardio & HIIT",
    description: "Expert in high-intensity interval training and cardio workouts for maximum fat loss.",
  },
  {
    name: "Emma Wilson",
    specialty: "Nutrition Coach",
    description: "Certified nutrition specialist helping clients optimize their diet for fitness goals.",
  },
]

export function TrainersSection() {
  return (
    <section id="trainers" className="bg-gray-900 py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet Our Trainers</h2>
          <p className="max-w-2xl mx-auto text-white">
            Our certified trainers are here to help you achieve your fitness goals with personalized guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TrainerCard({ name, specialty, description }: { name: string; specialty: string; description: string }) {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-64">
        <Image src="/assets/images/manRowingB.png" alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary mb-3">{specialty}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

