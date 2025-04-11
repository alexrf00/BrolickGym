import type { Subscription } from "@/types/subscription"

interface SubscriptionDetailsProps {
  subscription: Subscription | null
}

export function SubscriptionDetails({ subscription }: SubscriptionDetailsProps) {
  if (!subscription) {
    return <p>No subscription details available.</p>
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium">Subscription Details</h3>
        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
          <div className="text-muted-foreground">Plan</div>
          <div>{subscription.planName}</div>
          <div className="text-muted-foreground">Amount</div>
          <div>${subscription.amount.toFixed(2)} / month</div>
          <div className="text-muted-foreground">Status</div>
          <div className="text-green-600 font-medium">Active</div>
        </div>
      </div>
    </div>
  )
}
