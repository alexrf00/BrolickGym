import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, planName, price, userId, userEmail } = body;

    if (!planId || !planName || !price || !userId || !userEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Get or create customer
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: userEmail,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: userEmail,
        metadata: { userId },
      });
    }

    // 2. Create product and recurring price
    const recurringProduct = await stripe.products.create({
      name: planName,
      metadata: { planId },
    });

    const monthlyPrice = await stripe.prices.create({
      product: recurringProduct.id,
      unit_amount: Math.round(price * 100),
      currency: "usd",
      recurring: { interval: "month" },
      metadata: { planId },
    });

    // 3. One-time enrollment fee
    const enrollmentProduct = await stripe.products.create({
      name: "Enrollment Fee",
    });

    const enrollmentPrice = await stripe.prices.create({
      product: enrollmentProduct.id,
      unit_amount: 2500, // $25 in cents
      currency: "usd",
    });

    // 4. Manually calculated tax (e.g. 10% of $75)
    const taxAmount = Math.round(price * 0.10 * 100); // $7.50 in cents
    const taxProduct = await stripe.products.create({
      name: "Sales Tax",
    });

    const taxPrice = await stripe.prices.create({
      product: taxProduct.id,
      unit_amount: taxAmount,
      currency: "usd",
    });

    // 5. Create subscription with additional invoice items
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: monthlyPrice.id,
        },
      ],
      add_invoice_items: [
        {
          price: enrollmentPrice.id,
        },
        {
          price: taxPrice.id,
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
    });

    const invoice = subscription.latest_invoice as any;
    const paymentIntent = invoice?.payment_intent;

    return NextResponse.json({
      id: subscription.id,
      status: subscription.status,
      clientSecret: paymentIntent?.client_secret,
    });
  } catch (error: any) {
    console.error("Error creating subscription:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create subscription" },
      { status: 500 }
    );
  }
}
