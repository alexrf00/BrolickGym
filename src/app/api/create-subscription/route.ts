import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { paymentMethodId, planId, planName, price, userId, userEmail } = body

    // Create or get customer
    let customer
    const existingCustomers = await stripe.customers.list({
      email: userEmail,
      limit: 1,
    })

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0]
    } else {
      customer = await stripe.customers.create({
        email: userEmail,
        payment_method: paymentMethodId,
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
        metadata: {
          userId,
        },
      })
    }

    // Create product if it doesn't exist
    let product
    const existingProducts = await stripe.products.list({
      active: true,
      limit: 1,
    })

    if (existingProducts.data.length > 0) {
      product = existingProducts.data[0]
    } else {
      product = await stripe.products.create({
        name: planName,
        metadata: {
          planId,
        },
      })
    }

    // Create price
    const priceObj = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(price * 100), // Convert to cents
      currency: "usd",
      recurring: {
        interval: "month",
      },
      metadata: {
        planId,
      },
    })

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: priceObj.id,
        },
      ],
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
      metadata: {
        userId,
        planId,
      },
    })

    const invoice = subscription.latest_invoice as any
    const paymentIntent = invoice?.payment_intent

    return NextResponse.json({
      id: subscription.id,
      status: subscription.status,
      clientSecret: paymentIntent?.client_secret,
    })
  } catch (error: any) {
    console.error("Error creating subscription:", error)
    return NextResponse.json({ error: error.message || "Failed to create subscription" }, { status: 500 })
  }
}
