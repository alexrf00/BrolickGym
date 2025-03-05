import { Dumbbell } from "lucide-react"

const classes = [
  {
    name: "Strength Training",
    description: "Experience our intense strength training sessions led by expert trainers.",
  },
  { name: "Cardio Blast", description: "Experience our intense cardio blast sessions led by expert trainers." },
  { name: "Yoga Flow", description: "Experience our intense yoga flow sessions led by expert trainers." },
]

export default function ClassesSection() {
  return (
    <section id="classes" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Our Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors"
            >
              <Dumbbell className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-white">{classItem.name}</h3>
              <p className="text-gray-300">{classItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

