import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css';
import { StripeProvider } from "@/lib/providers/stripe-provider"
import { AuthProvider } from "@/lib/providers/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitConnect - Premium Gym Memberships",
  description: "Join our premium gym network and transform your fitness journey today.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <AuthProvider>
          {children}
          </AuthProvider>
      </body>
    </html>
  )
}
