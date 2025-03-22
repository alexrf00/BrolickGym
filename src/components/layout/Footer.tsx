import Link from "next/link"
import { Dumbbell } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">FitZone</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your ultimate destination for fitness and wellness. We&apos;re dedicated to helping you achieve your fitness goals.
            </p>
          </div>
          <FooterLinkSection
            title="Quick Links"
            links={[
              { href: "/", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#membership", label: "Membership" },
              { href: "#contact", label: "Contact" },
            ]}
          />
          <FooterLinkSection
            title="Services"
            links={[
              { href: "#", label: "Personal Training" },
              { href: "#", label: "Group Classes" },
              { href: "#", label: "Nutrition Coaching" },
              { href: "#", label: "Fitness Assessment" },
              { href: "#", label: "Weight Loss Programs" },
            ]}
          />
          <div>
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <OpeningHours day="Monday - Friday" hours="5:00 AM - 11:00 PM" />
              <OpeningHours day="Saturday" hours="6:00 AM - 10:00 PM" />
              <OpeningHours day="Sunday" hours="7:00 AM - 9:00 PM" />
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FitZone. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLinkSection({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-muted-foreground hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function OpeningHours({ day, hours }: { day: string; hours: string }) {
  return (
    <li className="flex justify-between">
      <span className="text-muted-foreground">{day}:</span>
      <span>{hours}</span>
    </li>
  )
}

