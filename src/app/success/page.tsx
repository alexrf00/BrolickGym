'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { SubscriptionDetails } from '@/features/subscriptions/components/subscription-details';
import { Header } from '@/components/layout/header';
import { useAuth } from '@/lib/providers/auth-provider';

export default function SuccessPage() {
  const FUNCTION_BASE_URL = process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL;
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<any>(null);

  useEffect(() => {
    async function fetchSubscription() {
      if (!user) return;

      try {
        const token = await user.getIdToken();

        const res = await fetch(`${FUNCTION_BASE_URL}/getUserSubscription`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Subscription fetch failed');
        }

        const data = await res.json();
        console.log("data: ",data)
        setSubscription(data);
      } catch (err) {
        setError('Failed to verify subscription');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscription();
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          {loading ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-muted-foreground">Verifying your subscription...</p>
              </div>
            </div>
          ) : error ? (
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-destructive">Subscription Error</CardTitle>
                <CardDescription>
                  We encountered an issue with your subscription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{error}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle>Subscription Successful!</CardTitle>
                <CardDescription>
                  Thank you for subscribing to our gym membership
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SubscriptionDetails subscription={subscription} />
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button asChild className="w-full">
                  <Link href="/account">View My Account</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/">Return to Home</Link>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
