'use client';

import { useEffect } from 'react';
import { ArrowRight, Clock, Dumbbell, Users } from 'lucide-react';
import Link from 'next/link';
import { SUBSCRIPTION_PLAN } from '@/features/subscriptions/config/plans';
import { useAuth } from '@/lib/providers/auth-provider';
import { useRouter } from 'next/navigation';

export function SubscriptionPlans() {
  const { user } = useAuth();
  const router = useRouter();
  // const [clientSecret, setClientSecret] = useState<string | null>(null);

  // const handleLoginRedirect = () => {
  //   router.push('/login?redirect=/plans');
  // };

  // useEffect(() => {
  //   const fetchClientSecret = async () => {
  //     if (!user) return;

  //     await fetch('/api/create-subscription', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         planId: SUBSCRIPTION_PLAN.id,
  //         planName: SUBSCRIPTION_PLAN.name,
  //         price: SUBSCRIPTION_PLAN.price,
  //         userId: user.uid,
  //         userEmail: user.email,
  //       }),
  //     });
  //   };

  //   fetchClientSecret();
  // }, [user]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">Premium Gym Membership</h1>
        <p className="mt-4 text-xl text-center text-gray-600">Get access to all our premium facilities and classes</p>

        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-primary" />
              <h2 className="ml-3 text-2xl font-bold text-gray-900">Premium Membership</h2>
            </div>
            <div className="mt-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-gray-900">$49.99</span>
              <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
            </div>
            <p className="mt-6 text-gray-500">
              Our premium membership gives you unlimited access to all facilities and classes.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-base text-gray-700">24/7 access to all gym locations</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-base text-gray-700">Unlimited group fitness classes</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Dumbbell className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-base text-gray-700">Access to premium equipment and facilities</p>
              </li>
            </ul>
            {user ? (
            <div className="mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/checkout"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>):
            (
              <div className="mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/login?redirect=/plans"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90"
                >
                  Login to Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            )}
          </div>
          <div className="px-6 py-4 bg-gray-50">
            <p className="text-xs text-gray-500">One-time enrollment fee of $25.00 applies. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
