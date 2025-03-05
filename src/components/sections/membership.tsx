import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useSession } from "next-auth/react"
import { Session } from "next-auth"

const plans = [
  {
    name: "Basic",
    price: 29,
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Locker room access",
      { disabled: true, text: "Group classes" },
      { disabled: true, text: "Personal training" },
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: 49,
    features: [
      "Access to gym floor",
      "Full equipment usage",
      "Locker room access",
      "Unlimited group classes",
      { disabled: true, text: "Personal training" },
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: 79,
    features: [
      "Access to gym floor",
      "Full equipment usage",
      "Locker room access",
      "Unlimited group classes",
      "2 PT sessions/month",
    ],
    popular: false,
  },
]

export function MembershipSection() {
  const { data: session } = useSession()

  return (
    <section id="membership" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your fitness goals and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <MembershipPlan key={index} {...plan} session={session} />
          ))}
        </div>
      </div>
    </section>
  )
}
interface MembershipPlanProps {
    name: string;
    price: number;
    features: (string | { disabled: boolean; text: string })[];
    popular: boolean;
    session?: Session | null; // ✅ Change session type to allow Session or null
  }
  
function MembershipPlan({ name, price, features, popular, session }: MembershipPlanProps) {
  return (
    <div
      className={`rounded-lg p-8 shadow-sm ${popular ? "bg-primary text-primary-foreground" : "bg-background border"}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-background text-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="text-3xl font-bold mb-4">
        ${price}
        <span className={`text-sm font-normal ${popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          /month
        </span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string | { disabled: boolean; text: string }, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight
              className={`h-5 w-5 ${typeof feature === "string" || !feature.disabled ? (popular ? "" : "text-primary") : popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
            />
            <span
              className={
                typeof feature === "string" || !feature.disabled
                  ? ""
                  : popular
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
              }
            >
              {typeof feature === "string" ? feature : feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={popular ? "secondary" : "default"} asChild>
        <Link href={session ? "/dashboard/membership" : "/signup"}>{session ? "Upgrade Plan" : "Choose Plan"}</Link>
      </Button>
    </div>
  )
}

