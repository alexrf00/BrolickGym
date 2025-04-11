// "use client"

// import { type ReactNode, useState, useEffect } from "react"
// import { Elements } from "@stripe/react-stripe-js"
// import { loadStripe } from "@stripe/stripe-js"

// // Initialize Stripe outside of the component to avoid recreating it on each render
// // We'll use a public key here since this is client-side code
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_TYooMQauvdEDq54NiTphI7jx")

// interface StripeProviderProps {
//   children: ReactNode
// }

// export function StripeProvider({ children }: StripeProviderProps) {
//   const [clientSecret, setClientSecret] = useState<string | null>(null)

//   useEffect(() => {
//     // You could fetch a client secret here if needed for specific Stripe components
//     // For our checkout flow, we don't need it since we're using redirectToCheckout
//   }, [])

//   return (
//     <Elements stripe={stripePromise} options={clientSecret ? { clientSecret } : undefined}>
//       {children}
//     </Elements>
//   )
// }
