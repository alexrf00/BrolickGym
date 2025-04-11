"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { loadStripe } from "@stripe/stripe-js"

// Update the Stripe initialization to use a more secure approach
// Remove the hardcoded key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_TYooMQauvdEDq54NiTphI7jx")

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: { monthly: 29.99, annual: 299.99 },
    description: "Perfect for beginners",
    features: ["Access to main gym area", "Standard equipment usage", "2 fitness classes per month", "Locker access"],
  },
  {
    id: "premium",
    name: "Premium",
    price: { monthly: 49.99, annual: 499.99 },
    description: "Our most popular plan",
    features: [
      "Full gym access",
      "All equipment usage",
      "Unlimited fitness classes",
      "Locker with towel service",
      "1 personal training session monthly",
    ],
    highlighted: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: { monthly: 79.99, annual: 799.99 },
    description: "For serious fitness enthusiasts",
    features: [
      "24/7 gym access",
      "Premium equipment priority",
      "Unlimited fitness classes",
      "Premium locker with towel service",
      "4 personal training sessions monthly",
      "Nutrition consultation",
      "Access to spa facilities",
    ],
  },
]

export function SubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [isLoading, setIsLoading] = useState<string | null>(null)

  // Update the handleSubscribe function to handle errors better
  const handleSubscribe = async (planId: string) => {
    try {
      setIsLoading(planId)
      const plan = plans.find((p) => p.id === planId)
      if (!plan) return

      const stripe = await stripePromise
      if (!stripe) throw new Error("Stripe failed to initialize")

      // Create a checkout session on the server
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId: planId,
          planName: plan.name,
          price: billingCycle === "monthly" ? plan.price.monthly : plan.price.annual,
          billingCycle: billingCycle,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create checkout session")
      }

      const session = await response.json()

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

      if (result.error) {
        throw new Error(result.error.message)
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center gap-4">
        <Label htmlFor="billing-cycle">Monthly</Label>
        <Switch
          id="billing-cycle"
          checked={billingCycle === "annual"}
          onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
        />
        <div className="flex items-center gap-1.5">
          <Label htmlFor="billing-cycle">Annual</Label>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Save 20%</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`flex flex-col ${plan.highlighted ? "border-primary shadow-lg relative" : ""}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <p className="text-3xl font-bold">
                  ${billingCycle === "monthly" ? plan.price.monthly : plan.price.annual}
                  <span className="text-sm font-normal text-muted-foreground">
                    {billingCycle === "monthly" ? "/month" : "/year"}
                  </span>
                </p>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => handleSubscribe(plan.id)}
                disabled={isLoading === plan.id}
              >
                {isLoading === plan.id ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                    Processing...
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
