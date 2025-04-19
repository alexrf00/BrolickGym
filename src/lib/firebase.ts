import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFunctions, httpsCallable } from "firebase/functions"

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true') {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
}
export const functions = getFunctions(app)
export const googleProvider = new GoogleAuthProvider()

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: "select_account",
})

// Export the app
export default app

// Function to create a checkout session
export async function createCheckoutSession(data: {
  planId: string
  planName: string
  price: number
  billingCycle: "monthly" | "annual"
}) {
  try {
    // Check if user is authenticated
    const user = auth.currentUser
    if (!user) {
      throw new Error("User not authenticated")
    }

    // Call the Firebase function
    const createStripeCheckout = httpsCallable(functions, "createStripeCheckout")
    const result = await createStripeCheckout({
      planId: data.planId,
      planName: data.planName,
      price: data.price,
      billingCycle: data.billingCycle,
      userId: user.uid,
      email: user.email,
    })

    // Return the session data
    return result.data as { sessionId: string; url: string }
  } catch (error) {
    console.error("Error creating checkout session:", error)
    throw error
  }
}

// Function to verify subscription after payment
export async function verifySubscription(sessionId: string) {
  try {
    const verifyStripeSession = httpsCallable(functions, "verifyStripeSession")
    const result = await verifyStripeSession({ sessionId })
    return result.data
  } catch (error) {
    console.error("Error verifying subscription:", error)
    throw error
  }
}

// Function to get user subscription
export async function getUserSubscription() {
  try {
    const user = auth.currentUser
    if (!user) {
      throw new Error("User not authenticated")
    }

    const getSubscription = httpsCallable(functions, "getSubscription")
    const result = await getSubscription({ userId: user.uid })
    return result.data
  } catch (error) {
    console.error("Error getting subscription:", error)
    throw error
  }
}

// Function to cancel subscription
export async function cancelSubscription(subscriptionId: string) {
  try {
    const user = auth.currentUser
    if (!user) {
      throw new Error("User not authenticated")
    }

    const cancelStripeSubscription = httpsCallable(functions, "cancelSubscription")
    const result = await cancelStripeSubscription({
      subscriptionId,
      userId: user.uid,
    })
    return result.data
  } catch (error) {
    console.error("Error canceling subscription:", error)
    throw error
  }
}
