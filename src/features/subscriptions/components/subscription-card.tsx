"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard } from "lucide-react"
import { cancelSubscription } from "@/features/subscriptions/api/cancel-subscription"
import type { Subscription } from "@/types/subscription"
import { formatDate } from "@/lib/utils"

interface SubscriptionCardProps {
  subscription: Subscription
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCancelSubscription = async () => {
    if (!subscription) return

    if (confirm("Are you sure you want to cancel your subscription?")) {
      try {
        setIsLoading(true)
        await cancelSubscription(subscription.id)
        window.location.reload()
      } catch (error) {
        console.error("Error canceling subscription:", error)
        alert("Failed to cancel subscription. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Your Subscription</CardTitle>
          <Badge variant={subscription.status === "active" ? "default" : "destructive"}>
            {subscription.status === "active" ? "Active" : subscription.status}
          </Badge>
        </div>
        <CardDescription>{subscription.planName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Billing Details</h3>
            <Separator className="my-2" />
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Amount</div>
              <div>${subscription.amount.toFixed(2)} / month</div>
              <div className="text-muted-foreground">Current period ends</div>
              <div>{formatDate(subscription.currentPeriodEnd)}</div>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Payment Method</h3>
            <Separator className="my-2" />
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <span>•••• •••• •••• 4242</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3">
        <Button asChild>
          <Link href="/account/billing">Manage Payment Methods</Link>
        </Button>
        {subscription.status === "active" && (
          <Button variant="outline" onClick={handleCancelSubscription} disabled={isLoading}>
            {isLoading ? "Processing..." : "Cancel Subscription"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
