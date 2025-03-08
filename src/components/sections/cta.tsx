import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function CTASection() {
  const { user } = useAuth()

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join FitZone today and take the first step towards a healthier, stronger you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {user ? (
            <Button variant="secondary" size="lg" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <Button variant="secondary" size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          )}
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

