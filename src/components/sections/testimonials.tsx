import Image from "next/image"

const testimonials = [
  {
    content:
      "I've been a member for 6 months and the results have been amazing. The trainers are knowledgeable and the equipment is top-notch. Highly recommend!",
    author: "Jennifer K.",
    memberSince: "2022",
  },
  {
    content:
      "The 24/7 access is perfect for my busy schedule. I can work out whenever I want, and the facility is always clean and well-maintained.",
    author: "Robert T.",
    memberSince: "2021",
  },
  {
    content:
      "The group classes are fantastic! The instructors are motivating and the workouts are challenging but fun. I've made great progress and new friends.",
    author: "Lisa M.",
    memberSince: "2023",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gray-800 py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Members Say</h2>
          <p className="text-white max-w-2xl mx-auto">
            Don&#39;t just take our word for it. Here&#39;s what our members have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ content, author, memberSince }: { content: string; author: string; memberSince: string }) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        ))}
      </div>
      <p className="text-muted-foreground mb-4">{content}</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src="/placeholder.svg?height=100&width=100" alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-muted-foreground">Member since {memberSince}</p>
        </div>
      </div>
    </div>
  )
}

