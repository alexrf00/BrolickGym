// File: /app/api/create-checkout-session/route.ts
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { planId, planName, price, userId, userEmail } = body;

    if (!planId || !planName || !price || !userId || !userEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Create or retrieve Stripe customer
    const existingCustomers = await stripe.customers.list({
      email: userEmail,
      limit: 1,
    });

    let customer = existingCustomers.data[0];

    if (!customer) {
      customer = await stripe.customers.create({
        email: userEmail,
        metadata: { userId },
      });
    }

    // 2. Create price object
    const product = await stripe.products.create({
      name: planName,
      metadata: { planId },
    });

    const priceObj = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(price * 100),
      currency: 'usd',
      recurring: { interval: 'month' },
    });

    // 3. Create checkout session
const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  payment_method_types: ['card'],
  customer: customer.id,
  line_items: [
    {
      // Monthly subscription
      price: priceObj.id,
      quantity: 1,
    },
    {
      // Enrollment fee (one-time)
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Enrollment Fee',
          description: 'One-time enrollment fee',
        },
        unit_amount: 3000, // $30
      },
      quantity: 1,
    },
  ],
  automatic_tax: { enabled: true }, // Optional: enables auto tax calc
  success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
  cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/plans`,
  metadata: {
    userId,
    planId,
  },
});

    

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[create-checkout-session] Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong while creating checkout session' },
      { status: 500 }
    );
  }
}
