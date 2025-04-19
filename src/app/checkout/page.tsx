"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "@/features/subscriptions/components/checkout-form"
import OrderSummary from "@/features/subscriptions/components/order-summary"
import { StripeProvider } from "@/lib/providers/stripe-provider"
import { SUBSCRIPTION_PLAN } from '@/features/subscriptions/config/plans';
import { useAuth } from "@/lib/providers/auth-provider"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/header"

// Replace with your Stripe publishable key
const stripePromise = loadStripe("pk_test_your_publishable_key")

export default function CheckoutPage() {
  const { user } = useAuth();

  const router = useRouter()
  // const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(true)
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // const data = await res.json();
  // setClientSecret(data.clientSecret);

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
      setLoading(false);
    };

    fetchClientSecret();
  }, [user]);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#4F46E5",
    },
  }

  const options = {
    clientSecret,
    appearance,
  }

  // Order details
  const orderDetails = {
    subscription: 75,
    enrollmentFee: 25.00,
    tax: 3.38,
    total: 103.38,
  }

  return (
    <div>

      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Complete Your Subscription</h1>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h2>
                  {loading ? (
                    <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="h-12 bg-gray-200 rounded"></div>
                        <div className="h-12 bg-gray-200 rounded"></div>
                        <div className="h-12 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ) : clientSecret ? (
                    <StripeProvider clientSecret={clientSecret}>
                      <CheckoutForm />
                    </StripeProvider>
                  ) : (
                    <div className="text-red-500">Failed to load payment form. Please try again.</div>
                  )}
                </div>

                <OrderSummary details={orderDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
