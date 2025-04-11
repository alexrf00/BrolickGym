'use client';

import type { ReactNode } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js'; // ✅ correct source

const getStripePromise = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  if (!key) {
    console.error('Warning: Stripe publishable key is missing. Check your environment variables.');
    return null;
  }

  return loadStripe(key);
};

const stripePromise = getStripePromise();

interface StripeProviderProps {
  children: ReactNode;
  clientSecret: string;
}

export function StripeProvider({ children, clientSecret }: StripeProviderProps) {
  if (!stripePromise) {
    return (
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800">
        <p>Stripe configuration is missing. Please check your environment variables.</p>
      </div>
    );
  }

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'flat',
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}
