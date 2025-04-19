"use client"

import type React from "react"

import { useState } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { ArrowRight } from "lucide-react"

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return
    }

    setIsProcessing(true)

    // Confirm the payment
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    })

    if (error) {
      setErrorMessage(error.message || "An unexpected error occurred.")
    }

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isProcessing ? "Processing..." : "Complete Payment"}
        {!isProcessing && <ArrowRight className="ml-2 h-5 w-5" />}
      </button>
    </form>
  )
}
