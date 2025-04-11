import { stripe } from '@/lib/stripe';
import type Stripe from 'stripe';
import { db } from '@/lib/firebase-admin'; // adjust path if needed

export async function handleStripeWebhook(body: string, signature: string) {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Webhook signature verification failed: ${err.message}`);
    } else {
      throw new Error('Webhook signature verification failed due to an unknown error.');
    }
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const uid = session.client_reference_id; // Set this when creating the Checkout session
      const subscriptionId = session.subscription as string;
      const customerId = session.customer as string;

      console.log(`🔔 Checkout complete for user ${uid}`);

      if (!uid || !subscriptionId || !customerId) break;

      await db.collection('subscriptions').doc(uid).set(
        {
          stripeSubscriptionId: subscriptionId,
          stripeCustomerId: customerId,
          status: 'active',
          updatedAt: Date.now(),
        },
        { merge: true }
      );

      break;
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice;
      const uid = invoice.metadata?.firebaseUID;
      const subscriptionId = invoice.subscription as string;
      const customerId = invoice.customer as string;

      console.log(`🔔 Payment succeeded for user ${uid}, invoice ${invoice.id}`);

      if (!uid || !subscriptionId || !customerId) {
        console.warn('⚠️ Missing data in invoice metadata.');
        break;
      }

      await db.collection('subscriptions').doc(uid).set(
        {
          stripeSubscriptionId: subscriptionId,
          stripeCustomerId: customerId,
          status: invoice.status,
          currentPeriodEnd: invoice.lines.data[0].period.end * 1000,
          updatedAt: Date.now(),
        },
        { merge: true }
      );

      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      const uid = subscription.metadata?.firebaseUID;

      console.log(`🔔 Subscription cancelled: ${subscription.id}`);

      if (!uid) break;

      await db.collection('subscriptions').doc(uid).set(
        {
          status: 'canceled',
          updatedAt: Date.now(),
        },
        { merge: true }
      );

      break;
    }

    default:
      console.log(`🔸 Unhandled event type: ${event.type}`);
  }

  return { received: true };
}
