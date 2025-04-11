'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '@/lib/providers/auth-provider';
import { SUBSCRIPTION_PLAN } from '@/features/subscriptions/config/plans';

interface PaymentFormProps {
  clientSecret: string;
}

export function PaymentForm({ clientSecret }: PaymentFormProps) {
  const router = useRouter();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !user) return;

    setLoading(true);
    setError(null);

    try {
      const { error: stripeError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success?plan=${SUBSCRIPTION_PLAN.id}`,
        },
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      // No need to manually redirect — Stripe will handle it via return_url
    } catch (err: unknown) {
      console.error('Payment error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <label htmlFor="payment-element" className="text-sm font-medium">
          Payment details
        </label>
        <div className="p-3 border rounded-md bg-white">
          <PaymentElement id="payment-element" />
        </div>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={!stripe || loading}>
          {loading ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
              Processing...
            </>
          ) : (
            `Subscribe - $${SUBSCRIPTION_PLAN.price}/month`
          )}
        </Button>
      </div>
    </form>
  );
}
