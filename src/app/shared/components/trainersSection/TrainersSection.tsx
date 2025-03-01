import Image from "next/image"
import React from "react"

const trainers = [
  { name: "John Doe", title: "Certified Personal Trainer" },
  { name: "Jane Smith", title: "Certified Personal Trainer" },
  { name: "Mike Johnson", title: "Certified Personal Trainer" },
]

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/assets/images/manRowingB.png"
                  alt={trainer.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{trainer.name}</h3>
              <p className="text-gray-300">{trainer.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

