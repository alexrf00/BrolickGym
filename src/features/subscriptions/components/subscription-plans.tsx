'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SUBSCRIPTION_PLAN } from '@/features/subscriptions/config/plans';
import { PaymentForm } from '@/features/subscriptions/components/payment-form';
import { useAuth } from '@/lib/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { StripeProvider } from '@/lib/providers/stripe-provider';

export function SubscriptionPlans() {
  const { user } = useAuth();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const handleLoginRedirect = () => {
    router.push('/login?redirect=/plans');
  };

  useEffect(() => {
    const fetchClientSecret = async () => {
      if (!user) return;

      const res = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: SUBSCRIPTION_PLAN.id,
          planName: SUBSCRIPTION_PLAN.name,
          price: SUBSCRIPTION_PLAN.price,
          userId: user.uid,
          userEmail: user.email,
        }),
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
    };

    fetchClientSecret();
  }, [user]);

  return (
    <div className="max-w-md mx-auto">
      <Card className="flex flex-col border-primary shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{SUBSCRIPTION_PLAN.name}</CardTitle>
          <CardDescription>{SUBSCRIPTION_PLAN.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="mb-6 text-center">
            <p className="text-4xl font-bold">
              ${SUBSCRIPTION_PLAN.price}
              <span className="text-sm font-normal text-muted-foreground">/month</span>
            </p>
          </div>
          <ul className="space-y-3 mb-6">
            {SUBSCRIPTION_PLAN.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {user ? (
            clientSecret ? (
              <StripeProvider clientSecret={clientSecret}>
              <PaymentForm clientSecret={clientSecret} />
            </StripeProvider>
            ) : (
              <p className="text-center text-muted-foreground">Loading payment form…</p>
            )
          ) : (
            <Button onClick={handleLoginRedirect} className="w-full">
              Login to Subscribe
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
