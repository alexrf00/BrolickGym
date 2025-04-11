import { stripe } from "@/lib/stripe"
import type Stripe from "stripe"
import type { Subscription } from "@/types/subscription"

export async function getSubscription(subscriptionId: string): Promise<Subscription> {
  try {
    // Retrieve the subscription from Stripe
    const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
      expand: ["items.data.price.product"],
    })

    // Get the product name
    const product = subscription.items.data[0].price.product as Stripe.Product

    const planName = product.name || "Premium Membership"

    // Get the price
    const price = subscription.items.data[0].price
    const amount = price.unit_amount ? price.unit_amount / 100 : 75

    // Format the response
    return {
      id: subscription.id,
      planName,
      amount,
      interval: "month",
      status: subscription.status,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
    }
  } catch (error) {
    console.error("Error getting subscription:", error)
    throw error
  }
}
